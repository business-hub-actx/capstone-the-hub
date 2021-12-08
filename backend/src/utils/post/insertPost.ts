import {connect} from "../database.utils";
import{Post} from "../interfaces/Post";

export async function insertPost(post: Post) : Promise<string> {
  try {
const mysqlConnection =await connect();
  const query: string = "INSERT INTO post (postId, postProfileId, postContactInfo, postEmail, postDescription, postPosition, PostLogo, postCompany, postWebsite) VALUES (UUID_TO_BIN(:postId), :postProfileId, :postContactInfo, :postEmail, :postDescription, :postLogo, :postPosition, :PostCompany, :postWebsite)";
  await mysqlConnection.execute(query, post);
  return 'Post Successfully Created'
  } catch (error) {
    throw error
  }
}

