import {PartialProfile, Profile} from "../interfaces/Profile";
import { connect } from "../database.utils";

export async function updateProfile(profile: PartialProfile): Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query : string = `UPDATE profile SET profileActivationToken = :profileActivationToken, profileAboutMe = :profileAboutMe, profileEmail = :profileEmail, profileJobTitle = :profileJobTitle, profileName = :profileName, profilePhoto = :profilePhoto, profileUrl = :profileUrl, profileSkills = :profileSkills WHERE profileId = UUID_TO_BIN(:profileId)`;
        await mysqlConnection.execute(query, profile)
        return 'Profile successfully updated'
    }catch (error) {
        console.log(error)
        throw error
    }
}

