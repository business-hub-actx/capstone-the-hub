import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile"
import {RowDataPacket} from "mysql2"

export async function selectAllProfiles() : Promise<Profile[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(profileId) AS profileId, profileAboutMe, profileEmail, profileJobTitle, profileName, profilePhoto, profileUrl, profileResume, profileSkills FROM profile WHERE profileid = :profileId ORDER BY profileName ASC'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Profile>
    } catch (error) {
        throw error
    }
}
