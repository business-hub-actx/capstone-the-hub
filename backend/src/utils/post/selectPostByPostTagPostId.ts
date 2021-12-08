import {connect} from "../database.utils";
import {Post} from "../interfaces/Post";
import {RowDataPacket} from 'mysql2';

export async function selectPostByPostTagPostId(postTagPostId: string) : Promise<Post | null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery: string = 'SELECT BIN_TO_UUID(postId) AS postId, postProfileId, postContactInfo, postEmail, postDescription, postPosition, postLogo, postCompany, postWebsite FROM post WHERE  postId = UUID_TO_BIN(:postTagPostId)'
        const result = await mySqlConnection.execute(mySqlQuery, {postTagPostId}) as RowDataPacket[]
        const rows: Post[] = result[0] as Post[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}