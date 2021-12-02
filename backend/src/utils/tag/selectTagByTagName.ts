import { connect } from "../database.utils";
import { Tag } from '../interfaces/Tag';
import { RowDataPacket } from 'mysql2';

export async function selectTagByTagName(tagId: string) : Promise<Tag | null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = `SELECT BIN_TO_UUID(tagName) as tagId, tagName FROM tag WHERE tagName = UUID_TO_BIN(:tagId)`
        const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {tagId}) as RowDataPacket[]
        const rows: Tag[] = result[0] as Tag[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }

}