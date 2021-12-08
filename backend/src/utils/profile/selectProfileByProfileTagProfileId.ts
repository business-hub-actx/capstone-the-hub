import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from 'mysql2';

export async function selectProfilesByProfileTagProfileId(profileTagProfileId: string) : Promise<Profile | null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery: string = 'SELECT BIN_TO_UUID(profileId) AS profileId, profilePhoto, profileAboutMe, profileJobTitle, profileEmail, profileName, profileUrl, profileResume, profileSkills FROM profile WHERE  profileId = UUID_TO_BIN(:profileTagProfileId)'
        const result = await mySqlConnection.execute(mySqlQuery, {profileTagProfileId}) as RowDataPacket[]
        const rows: Profile[] = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}












/*export async function selectTweetsByTweetProfileId(tweetProfileId: string) : Promise<Tweet[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(tweetId) AS tweetId, BIN_TO_UUID (tweetProfileId) AS tweetProfileId, tweetContent, tweetDate, profile.profileAtHandle, profile.profileAvatarUrl, (SELECT COUNT(*) FROM `like` WHERE tweet.tweetId = like.likeTweetId) AS likeCount FROM tweet INNER JOIN profile ON profile.profileId = tweet.tweetProfileId WHERE tweetProfileId = UUID_TO_BIN(:tweetProfileId) ORDER BY tweetDate DESC'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {tweetProfileId})
        return result[0] as Tweet[]
    } catch (error) {
        throw error
    }
}*/


/*import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from 'mysql2';

export async function selectProfileByProfileName(profileName: string): Promise<Profile|null>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = `SELECT BIN_TO_UUID(profileId) as profileId, profilePhoto, profileAboutMe, profileJobTitle, profileEmail, profileName, profileUrl, profileResume, profileSkills  FROM profile WHERE profileName = :profileName`
        const result = await mysqlConnection.execute(sqlQuery, {profileName}) as RowDataPacket[]
        const rows: Profile[]  = result[0] as Profile[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
} */