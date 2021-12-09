import { connect } from "../database.utils";
import { PostTag } from '../interfaces/PostTag';
import { RowDataPacket } from 'mysql2';

export async function selectPostTagByPostId(postId: string) : Promise<PostTag[]> {
    try {
        console.log(postId)
        const mySqlConnection = await connect();
        const mySqlQuery: string = `SELECT  BIN_TO_UUID(postTagTagId) as postTagTagId,BIN_TO_UUID(postTagPostId) as postTagPostId FROM postTag WHERE postTagPostId = UUID_TO_BIN(:postId)`
        const result: RowDataPacket[] = await mySqlConnection.execute(mySqlQuery, {postId}) as RowDataPacket[]
        const rows: PostTag[] = result[0] as PostTag[]
        return rows
    } catch (error) {
        throw error
    }

}