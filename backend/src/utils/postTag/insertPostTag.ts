import {connect} from "../database.utils";
import {PostTag} from "../interfaces/PostTag";

export async function insertPostTag(tag: PostTag) : Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query: string = `INSERT INTO postTag(postTagPostId, postTagTagId) VALUES (UUID_TO_BIN(:postTagPostId),UUID_TO_BIN(:postTagTagId))`;
        await mysqlConnection.execute(query, tag);
        return 'Tag Successfully Created'
    } catch (error) {
        throw error
    }
}