import {Request, Response} from 'express';
// DB
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Profile} from '../../utils/interfaces/Profile';
import {Status} from '../../utils/interfaces/Status';
import {insertProfile} from '../../utils/profile/insertProfile';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';


// Interfaces (represent the DB model and types of the columns associated with a specific DB table)


export async function signupProfileController(request: Request, response: Response): Promise<Response | undefined> {
	try {

		const mailgun: Mailgun = new Mailgun(formData)
		const mailgunClient: Client = mailgun.client({username: "api", key: <string>process.env.MAILGUN_API_KEY})

		const {profilePhoto, profileAboutMe, profileJobTitle, profileEmail, profileName, profileUrl, profileSkills, profilePassword} = request.body;
		console.log("profile Password", profilePassword)
		const profileHash = await setHash(profilePassword);
		const profileActivationToken = setActivationToken();
		const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${profileActivationToken}`
		console.log(profileActivationToken)

		const message = `<h2>Welcome to Amarillo Tech Hub.</h2>
<p>Please check your email for an activation to confirm your account</p>
<p><a href="${basePath}">${basePath}</a></p>
`

		const mailgunMessage = {
			from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
			to: profileEmail,
			subject: 'One step closer to Sticky Head -- Account Activation',
			html: message
		}


		const profile: Profile = {
			profileId: null,
			profileAboutMe,
			profileActivationToken,
			profileEmail,
			profileHash,
			profileJobTitle,
			profileName,
			profilePhoto: "https://placekitten.com/200/200",
			profileUrl,
			profileResume: null,
			profileSkills
		};
		await insertProfile(profile)

		//await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)

		const status: Status = {
			status: 200,
			message: 'Profile successfully created please check your email.',
			data: null
		};

		return response.json(status)

	} catch (error: any) {
    console.error(error)
		const status: Status = {
			status: 500,
			message: error.message,
			data: null
		};

		return response.json(status);
	}
}