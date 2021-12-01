import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string> {
	try {
		const mysqlConnection = await connect();
		const query: string = `INSERT INTO profile(profileId, profileAboutMe, profileActivationToken, profileEmail, profileHash, profileJobTitle, profileName, profilePhoto, profileUrl, profileResume, profileSkills) VALUES (UUID_TO_BIN(uuid()), :profileAboutMe, :profileActivationToken, :profileEmail, :profileHash, :profileJobTitle, :profileName, :profilePhoto, :profileUrl, :profileResume, :profileSkills)`;
		await mysqlConnection.execute(query, profile);
		return 'Profile Successfully Created'
	} catch (error) {
		throw error
	}
}