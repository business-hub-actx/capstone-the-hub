import {Router} from "express"
import {
    createPostTagController, getPostTagByPostIdController,
    getPostTagByPostTagTagIdController, getPostTagByPrimaryKey
} from './postTag.controller'
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {checkSchema} from "express-validator";
import {postTagValidator} from "./postTag.validator";

export const postTagRoute = Router()

postTagRoute.route("/")
    .post(isLoggedIn, asyncValidatorController(checkSchema(postTagValidator)), createPostTagController)
postTagRoute.route("/postTagId/:tagId")
    .get(getPostTagByPostTagTagIdController)
postTagRoute.route("/postTagPostId/:postId")
    .get(getPostTagByPostIdController)
postTagRoute.route("/postTagPostId/:postId/postTagTagId/:tagId")
    .get(getPostTagByPrimaryKey)