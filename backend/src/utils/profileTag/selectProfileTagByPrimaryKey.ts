import {connect} from "../database.utils";
import {ProfileTag} from '../interfaces/ProfileTag';
import {RowDataPacket} from 'mysql2';

export async function selectProfileTagByPrimaryKey(profileTagProfileId: string, profileTagTagId:string){
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID (profileTagProfileId) AS profileTagProfileId, BIN_TO_UUID(profileTagTagId) AS profileTagTagId FROM profileTag WHERE profileTagProfileId = UUID_TO_BIN(:profileTagProfileId) AND profileTagTagId =  UUID_TO_BIN(:profileTagTagId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, {profileTagProfileId, profileTagTagId})
        return rows

    }catch (error) {
        throw error
    }
}