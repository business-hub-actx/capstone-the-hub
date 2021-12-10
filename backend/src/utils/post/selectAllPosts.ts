import { connect } from "../database.utils";
import { Post } from "../interfaces/Post"
import {RowDataPacket,} from "mysql2"

export async function selectAllPosts() : Promise<Post[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(postId) AS postId, BIN_TO_UUID(postProfileId) AS postProfileId, postContactInfo, postEmail, postDescription, postLogo, postCompany, postWebsite FROM post ORDER BY postCompany ASC'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Post>
    } catch (error) {
        throw error
    }
}