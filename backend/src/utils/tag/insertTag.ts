import {connect} from "../database.utils";
import {Tag} from "../interfaces/Tag";

export async function insertTag(tag: Tag) : Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query: string = `INSERT INTO tag(tagId, tagName) VALUES (UUID_TO_BIN(uuid()), :tagName)`;
        await mysqlConnection.execute(query, tag);
        return 'Tag Successfully Created'
    } catch (error) {
        throw error
    }
}