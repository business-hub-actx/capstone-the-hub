import {Router} from "express"
import {
    createProfileTagController, getProfileTagByProfileIdController,
    getProfileTagByProfileTagTagIdController, getProfileTagByPrimaryKey
} from './profileTag.controller'
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {profileTagValidator} from "./profileTag.validator";

export const profileTagRoute = Router()

profileTagRoute.route("/")
    .post(isLoggedIn, asyncValidatorController(checkSchema(profileTagValidator)), createProfileTagController)
profileTagRoute.route("/profileTagId/:tagId")
    .get(asyncValidatorController([
        check("tagId", "please provide a tag Id").isUUID()
    ]),getProfileTagByProfileTagTagIdController)
profileTagRoute.route("/profileTagProfileId/:profileId")
    .get(asyncValidatorController([
        check("profileId", "please provide a valid profile Id").isUUID()
    ]),getProfileTagByProfileIdController)
profileTagRoute.route("/profileTagProfileId/:profileId/profileTagTagId/:tagId")
    .get(asyncValidatorController([
        check("tagId", "please provide a valid profile tag tag Id").isUUID()
    ]),getProfileTagByPrimaryKey)