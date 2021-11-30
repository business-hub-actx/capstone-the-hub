import {connect} from "../database.utils";
import{Profile} from "../interfaces/Profile";

export async function insertPost(post: Post) : Promise<string> {
  try {
const mysqlConnection =await connect();
  const query: string = "INSERT INTO post (postId, postProfileId, postContactInfo, postEmail, postDescription, postPosition, PostLogo, postCompany, postWebsite) VALUES (UUUID_TO_BIN('7d44eac3-4fca-4b3f-91a4-9afa3f84a010'), :postProfileId, :postContactInfo, :postEmail, :postDescription, :postLogo, :postPosition, :PostCompany, :postWebsite)";
  await mysqlConnection.execute(query, post);
  return 'Post Successfully Created'
  } catch (error) {
    throw error
  }
}

