import { Profile } from "../interfaces/Profile";
import { connect } from "../database.utils";
import { ResultSetHeader, RowDataPacket } from 'mysql2';

export async function updateProfile(profile: Profile): Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE profile SET profileActivationToken = :profilActivationToken, profileAboutMe = :profileAboutMe, profileEmail = :profileEmail, profileJobTitle = :profileJobTitle, profileName = :profileName, profilePhoto = :profilePhoto, profileUrl = :profileUrl, profileResume = :profileResume, profileSkills = :profileSkills';
        await mysqlConnection.execute(query, profile)
        return 'Profile successfully updated'
    }catch (error) {
        throw error
    }
}

