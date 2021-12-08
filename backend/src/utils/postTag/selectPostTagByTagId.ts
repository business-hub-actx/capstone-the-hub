import { connect } from "../database.utils";
import { PostTag } from '../interfaces/PostTag';
import { RowDataPacket } from 'mysql2';

export async function selectPostTagByTagId(postId: string) : Promise<PostTag | null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery: string = `SELECT BIN_TO_UUID(postTagTagId) as postTagPostId FROM postTag WHERE postTagTagId = UUID_TO_BIN(:postId)`
        const result: RowDataPacket[] = await mySqlConnection.execute(mySqlQuery, {postId}) as RowDataPacket[]
        const rows: PostTag[] = result[0] as PostTag[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }

}