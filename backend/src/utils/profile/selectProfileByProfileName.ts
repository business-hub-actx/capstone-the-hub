import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from 'mysql2';

export async function selectProfileByProfileName(profileName: string): Promise<Profile|null>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = `SELECT BIN_TO_UUID(profileId) as profileId, profilePhoto, profileAboutMe, profileJobTitle, profileEmail, profileName, profileUrl, profileResume, profileSkills  FROM profile WHERE profileName = :profileName`
        const result = await mysqlConnection.execute(sqlQuery, {profileName}) as RowDataPacket[]
        const rows: Profile[]  = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}