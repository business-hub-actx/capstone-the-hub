import { connect } from "../database.utils";
import { PostTag } from '../interfaces/PostTag';
import { RowDataPacket } from 'mysql2';

export async function selectPostTagByPrimaryKey(postTag: PostTag){
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT postTagPostId, postTagTagId FROM postTag WHERE postTagPostId = UUID_TO_BIN(:postTagPostId) AND UUID_TO_BIN(:postTagTagId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, postTag)
        await mySqlConnection.end()
        console.log(rows)
        return rows

    }catch (error) {
        throw error
    }

}