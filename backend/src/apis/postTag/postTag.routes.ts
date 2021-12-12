import {Router} from "express"
import {
    createPostTagController, getPostTagByPostIdController,
    getPostTagByPostTagTagIdController, getPostTagByPrimaryKey
} from './postTag.controller'
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {postTagValidator} from "./postTag.validator";

export const postTagRoute = Router()

postTagRoute.route("/")
    .post(isLoggedIn, asyncValidatorController(checkSchema(postTagValidator)), createPostTagController)
postTagRoute.route("/postTagId/:tagId")
    .get(asyncValidatorController([
        check("tagId", "please provide a tag Id").isUUID()
    ]),getPostTagByPostTagTagIdController)
postTagRoute.route("/postTagPostId/:postId")
    .get(asyncValidatorController([
        check("postId", "please provide a valid post Id").isUUID()
    ]),getPostTagByPostIdController)
postTagRoute.route("/postTagPostId/:postId/postTagTagId/:tagId")
    .get(asyncValidatorController([
        check("tagId", "please provide a valid post tag tag Id").isUUID()
    ]),getPostTagByPrimaryKey)