import {connect} from "../database.utils";
import{Post} from "../interfaces/Post";

export async function insertPost(post: Post) : Promise<string> {
  try {
    console.log(post);
const mysqlConnection =await connect();
  const query: string = "INSERT INTO post (postId, postProfileId, postContactInfo, postEmail, postDescription, postPosition, postLogo, postCompany, postWebsite) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(:postProfileId), :postContactInfo, :postEmail, :postDescription, :postLogo, :postPosition, :postCompany, :postWebsite)";
  await mysqlConnection.execute(query, post);
  return 'Post Successfully Created'
  } catch (error) {
    throw error
  }
}

