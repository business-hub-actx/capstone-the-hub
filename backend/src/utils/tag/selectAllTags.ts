import {connect} from "../database.utils";
import {RowDataPacket,} from "mysql2"
import {Tag} from "../interfaces/Tag";

export async function selectAllTags() : Promise<Tag[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(tagId) AS tagId, tagName FROM tag'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Tag>
    } catch (error) {
        throw error
    }
}