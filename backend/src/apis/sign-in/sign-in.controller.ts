import {Request, Response} from 'express';
import "express-session";
import { v4 as uuid }from 'uuid';
import { generateJwt, validatePassword } from "../../utils/auth.utils";
import { Profile } from "../../utils/interfaces/Profile";
import { selectProfileByProfileEmail } from "../../utils/profile/selectProfileByProfileEmail";

export async function signInController(request: Request, response: Response): Promise<Response | undefined> {
    const {profileEmail} = request.body
    const mySqlResult: Profile | null = await selectProfileByProfileEmail(profileEmail);
    const isEmailValid: boolean = mySqlResult ? true : false
    try {
        const authenticate = async () => {
            const {profilePassword} = request.body;

            // @ts-ignore
            const {profileId, profileAboutMe, profileActivationToken, profileEmail, profileHash, profileJobTitle, profileName, profilePhoto, profileUrl, profileResume, profileSkills} = mySqlResult

            const profile: Profile = {
                profileId,
                profileAboutMe,
                profileActivationToken,
                profileEmail,
                profileHash,
                profileJobTitle,
                profileName,
                profilePhoto,
                profileUrl,
                profileResume,
                profileSkills
            }

            const signature: string = uuid();
            const authorization: string = generateJwt({
                profileId,
                profileEmail,
                profileName
            }, signature);

            const signInFailed = (message: string) => response.json({
                status: 400,
                data: null,
                message
            });

            const signInSuccessful = () => {
                if (profile.profileActivationToken !== null) {
                    signInFailed("please activate your account")
                }

                if (request.session) {
                    request.session.profile = profile;
                    request.session.jwt = authorization;
                    request.session.signature = signature;
                }

                response.header({
                    authorization
                });

                return response.json({status: 200, data: null, message: "Sign in successful"})
            };
            const isPasswordValid: boolean = profile && await validatePassword(profile.profileHash, profilePassword);
            return isPasswordValid ? signInSuccessful() : signInFailed("Invalid email or password")
        }

        return isEmailValid ? authenticate() : response.json({status: 400, data: null, message: "Invalid email or password"})
    } catch (error: any) {
        return response.json({status: 500, data: null, message: error.message})
    }
}
