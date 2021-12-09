import {
    getAllPostController,
    getPostByPostId,
    getPostByPostCompany,
    createPostController,
    getPostByPostTagId
} from "./post.controller";
import { Router } from "express";
import { asyncValidatorController } from "../../utils/controllers/asyncValidator.controller";
import { check, checkSchema } from "express-validator";
import {postValidator} from "./post.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const PostRoute = Router();
PostRoute.route('/')
    .get(getAllPostController)
    .post(isLoggedIn,asyncValidatorController(checkSchema(postValidator)),createPostController)

PostRoute.route("/postId/:postId")
    .get(
        asyncValidatorController([
            check("postId", "please provide a valid postId").isUUID()
        ])
        , getPostByPostId
    )
    // .put(asyncValidatorController(checkSchema(postValidator)), putPostController)

PostRoute.route("/postCompany/:postCompany")
    .get(
        asyncValidatorController([
            check("postCompany")])

        , getPostByPostCompany
    )
    // .put(asyncValidatorController(checkSchema(postValidator)), putPostController)


PostRoute.route("/create-post/:postId")
    .get(
        asyncValidatorController([
            check("postId", "please provide a valid postId").isUUID()
        ])
        , getPostByPostTagId
    )
    // .put(asyncValidatorController(checkSchema(postValidator)), putPostController)



// PostRoute.route("/tag/:postId")
//     .get(
//         asyncValidatorController([
//             check("postId", "please provide a valid postId").isUUID()
//         ])
//         , getPostByPostTagId
//     )
    // .put(asyncValidatorController(checkSchema(postValidator)), putPostController)