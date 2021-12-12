import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from 'mysql2';

export async function selectProfilesByProfileTagId(profileTagProfileId: string) : Promise<Profile | null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery: string = 'SELECT BIN_TO_UUID(profileId) AS profileId, profilePhoto, profileAboutMe, profileJobTitle, profileEmail, profileName, profileUrl, profileResume, profileSkills FROM profile WHERE  profileId = UUID_TO_BIN(:profileTagProfileId)'
        const result = await mySqlConnection.execute(mySqlQuery, {profileTagProfileId}) as RowDataPacket[]
        const rows: Profile[] = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}