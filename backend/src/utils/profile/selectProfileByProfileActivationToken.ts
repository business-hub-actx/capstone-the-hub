import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from "mysql2";

export async function selectProfileByProfileActivationToken(profileActivationToken: string): Promise<Profile|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = `SELECT BIN_TO_UUID(profileId) as profileId, profilePhoto, profileAboutMe, profileJobTitle, profileEmail, profileName, profileUrl, profileSkills FROM profile WHERE profileActivationToken = :profileActivationToken`;
        const result = await mysqlConnection.execute(mysqlQuery, {profileActivationToken}) as RowDataPacket[]
        const rows: Profile[] = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    }  catch (error) {
        console.log(error)
        throw error
    }
}