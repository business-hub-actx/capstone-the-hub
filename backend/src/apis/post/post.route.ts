import { getAllPostController, getPostByPostId, getPostByPostCompany, getPostByPostTagPostId } from "./post.controller";
import { Router } from "express";
import { asyncValidatorController } from "../../utils/controllers/asyncValidator.controller";
import { check, checkSchema } from "express-validator";


export const PostRoute = Router();
PostRoute.route('/')
    .get(getAllPostController);

PostRoute.route("/postId/:postId")
    .get(
        asyncValidatorController([
            check("postId", "please provide a valid postId").isUUID()
        ])
        , getPostByPostId
    )
    // .put(asyncValidatorController(checkSchema(postValidator)), putPostController)

PostRoute.route("/company/:postCompany")
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
        , getPostByPostTagPostId
    )
    // .put(asyncValidatorController(checkSchema(postValidator)), putPostController)



PostRoute.route("/tag/:postTagId")
    .get(
        asyncValidatorController([
            check("postId", "please provide a valid postId").isUUID()
        ])
        , getPostByPostTagPostId
    )
    // .put(asyncValidatorController(checkSchema(postValidator)), putPostController)