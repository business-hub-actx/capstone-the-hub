import{connect} from "../database.utils";
import{Post} from "../interfaces/Post";

export async function selectPostByPostCompany(PostId: string) : Promise<Post | null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT bin_To_UUID(postId) as postId, postProfileId, postContactInfo, postEmail, postDescription, postPosition, postLogo, postCompany, postWebsite, FROM post WHERE postCompany = :postCompany"
        const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {postId}) as RowDataPacket[]
        const rows: Post[] = result[0] as  Profile[]
        return rows.length !== 0 ? {...rows[0]} : null;

    } catch (error) {
        throw error
    }
}