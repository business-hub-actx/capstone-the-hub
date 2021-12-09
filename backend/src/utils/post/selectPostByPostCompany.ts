import{connect} from "../database.utils";
import{Post} from "../interfaces/Post";
import {RowDataPacket} from "mysql2";

export async function selectPostByPostCompany(postCompany: string) : Promise<Post> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(postId) as postId, postProfileId, postContactInfo, postEmail, postDescription, postPosition, postLogo, postCompany, postWebsite FROM post WHERE postCompany = :postCompany"
        const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {postCompany}) as RowDataPacket[]
        const [rows]: Post[] = result[0] as  Post[]
        return rows

    } catch (error) {
        throw error
    }
}