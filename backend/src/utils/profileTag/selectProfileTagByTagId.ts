import {connect} from "../database.utils";
import {ProfileTag} from '../interfaces/ProfileTag';
import {RowDataPacket} from 'mysql2';

export async function selectProfileTagByTagId(tagId: string) : Promise<ProfileTag[]> {
    try {
        console.log(tagId)
        const mySqlConnection = await connect();
        const mySqlQuery: string = `SELECT BIN_TO_UUID(profileTagTagId) as profileTagTagId,BIN_TO_UUID(profileTagProfileId) as profileTagProfileId FROM profileTag WHERE profileTagTagId = UUID_TO_BIN(:tagId)`
        const result: RowDataPacket[] = await mySqlConnection.execute(mySqlQuery, {tagId}) as RowDataPacket[]
        const rows: ProfileTag[] = result[0] as ProfileTag[]
        return rows
    } catch (error) {
        throw error
    }

}