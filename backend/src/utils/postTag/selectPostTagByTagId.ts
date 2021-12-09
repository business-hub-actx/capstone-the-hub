import { connect } from "../database.utils";
import { PostTag } from '../interfaces/PostTag';
import { RowDataPacket } from 'mysql2';

export async function selectPostTagByTagId(tagId: string) : Promise<PostTag[]> {
    try {
        console.log(tagId)
        const mySqlConnection = await connect();
        const mySqlQuery: string = `SELECT BIN_TO_UUID(postTagTagId) as postTagTagId,BIN_TO_UUID(postTagPostId) as postTagPostId FROM postTag WHERE postTagTagId = UUID_TO_BIN(:tagId)`
        const result: RowDataPacket[] = await mySqlConnection.execute(mySqlQuery, {tagId}) as RowDataPacket[]
        const rows: PostTag[] = result[0] as PostTag[]
        return rows
    } catch (error) {
        throw error
    }

}