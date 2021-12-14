import {connect} from "../database.utils";
import {ProfileTag} from "../interfaces/ProfileTag";

export async function insertProfileTag(tag: ProfileTag) : Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query: string = `INSERT INTO profileTag(profileTagProfileId, profileTagTagId) VALUES (UUID_TO_BIN(:profileTagProfileId),UUID_TO_BIN(:profileTagTagId))`;
        await mysqlConnection.execute(query, tag);
        return 'Tag Successfully Created'
    } catch (error) {
        throw error
    }
}