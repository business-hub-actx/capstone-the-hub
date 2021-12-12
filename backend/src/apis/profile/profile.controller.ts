import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {Status} from "../../utils/interfaces/Status";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByProfileId";
import {selectProfileByProfileName} from "../../utils/profile/selectProfileByProfileName";
import {selectProfileByProfileEmail} from "../../utils/profile/selectProfileByProfileEmail";
import {updateProfile} from "../../utils/profile/updateProfile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {selectProfilesByProfileTagId} from "../../utils/profile/selectProfilesByProfileTagId";
import {selectAllProfiles} from "../../utils/profile/selectAllProfiles";

// Update Profile
export async function putProfileController(request: Request, response: Response): Promise<Response> {
    try {
        const {profileId} = request.params
        const {profileAboutMe, profileJobTitle, profileEmail, profileName, profilePhoto, profileUrl, profileResume, profileSkills} = request.body
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId

        const performUpdate = async (partialProfile: PartialProfile): Promise<Response> => {
            const previousProfile: Profile | null = await selectProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: { profileName: string; profileUrl: string; profileEmail: string; profileAboutMe: string; profilePhoto: string; profileSkills: string; profileResume: string | null; profileId: string | null; profileJobTitle: string } = {...previousProfile, ...partialProfile}
            await updateProfile(newProfile)
            return response.json({status: 200, data: null, message: "Profile successfully updated"})
        }

        const updateFailed = (message: string): Response => {
            return response.json({status: 400, data: null, message})
        }
        return profileId === profileIdFromSession
            ? performUpdate({profileId, profileAboutMe, profileJobTitle, profileEmail, profileName, profilePhoto, profileUrl, profileResume, profileSkills})
            : updateFailed("you are not allowed to preform this action")
     // return response.json()
    } catch (error: any) {
        return response.json({status: 400, data: null, message: error.message})
    }
}

// Profile by Id
export async function getProfileByProfileIdController(request: Request, response: Response) {
    try {
        const {profileId} = request.params
        const data: Profile | null = await selectProfileByProfileId(profileId)
        const status: Status = {
            status: 200,
            data: data,
            message: null
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// Profile by Name
export async function getProfileByProfileNameController(request: Request, response: Response) {
    try {
        const {profileName} = request.params
        const data: PartialProfile | null = await selectProfileByProfileName(profileName)
        const status: Status = {
            status: 200,
            data: data,
            message: null
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// Profile by Email
export async function getProfileByProfileEmailController(request: Request, response: Response) {
    try {
        const {profileEmail} = request.params
        const data: PartialProfile | null = await selectProfileByProfileEmail(profileEmail)
        const status: Status = {
            status: 200,
            data: data,
            message: null
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// Partial Profile by Id
export async function getPartialProfileByProfileIdController(request: Request, response: Response) {
    try {
        const {profileId} = request.params
        const data: PartialProfile | null = await selectPartialProfileByProfileId(profileId)
        const status: Status = {
            status: 200,
            data: data,
            message: null
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// Profile by Profile Tag Profile Id
export async function getProfilesByProfileTagIdController(request: Request, response: Response) {
    try {
        const {profileId} = request.params
        const data: Profile | null = await selectProfilesByProfileTagId(profileId)
        const status: Status = {
            status: 200,
            data: data,
            message: null
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

export async function getAllProfilesController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllProfiles()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: []
        })
    }
}


