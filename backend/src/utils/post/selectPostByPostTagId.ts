import {connect} from "../database.utils";
import {Post} from "../interfaces/Post";
import {RowDataPacket} from 'mysql2';

export async function selectPostByPostTagId(postTagId: string) : Promise<Post[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery: string = 'SELECT BIN_TO_UUID(postId) AS postId, postProfileId, postContactInfo, postEmail, postDescription, postPosition, postLogo, postCompany, postWebsite FROM post JOIN postTag ON post.postId = postTag.postTagPostId WHERE postTagPostId = UUID_TO_BIN(:postTagPostId)'
        const result = await mySqlConnection.execute(mySqlQuery, {postTagId}) as RowDataPacket[]
        const rows: Post[] = result[0] as Post[]
        return rows
    } catch (error) {
        throw error
    }
}