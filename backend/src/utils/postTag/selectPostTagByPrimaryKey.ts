import {connect} from "../database.utils";
import {PostTag} from '../interfaces/PostTag';
import {RowDataPacket} from 'mysql2';

export async function selectPostTagByPrimaryKey(postTagPostId: string, postTagTagId:string){
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID (postTagPostId) AS postTagPostId, BIN_TO_UUID(postTagTagId) AS postTagTagId FROM postTag WHERE postTagPostId = UUID_TO_BIN(:postTagPostId) AND postTagTagId =  UUID_TO_BIN(:postTagTagId)";
        const [rows] = await mySqlConnection.execute(mySqlQuery, {postTagPostId, postTagTagId})

        console.log(rows)
        return rows

    }catch (error) {
        throw error
    }
}
