import { RowDataPacket } from "mysql2";
import{connect} from "../database.utils";
import{Post} from "../interfaces/Post";


export async function selectPostByPostId(postId: string) : Promise<Post | null> {
    try {
         const mysqlConnection = await connect();
         const mysqlQuery: string = "SELECT bin_To_UUID(postId) as postId, BIN_TO_UUID(postProfileId) as postProfileId, postContactInfo, postEmail, postDescription, postPosition, postLogo, postCompany, postWebsite FROM post WHERE postId = UUID_TO_BIN(:postId)"
    const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {postId}) as RowDataPacket[]
        const rows: Post[] = result[0] as  Post[]
        return rows.length !== 0 ? {...rows[0]} : null;

    } catch (error) {
        throw error
    }
}