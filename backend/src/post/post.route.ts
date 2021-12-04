import { getPostByPostIdController, getPostByPostNameController, putPostController } from "./profile.controller";
import { Router } from "express";
import { asyncValidatorController } from "../../utils/controllers/asyncValidator.controller";
import { check, checkSchema } from "express-validator";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";
import { postValidator } from "./post.validator";

export const PostRoute: Router = Router();
PostRoute.route('/')
    .post(putPostController);

PostRoute.route("/:postId")
    .get(
        asyncValidatorController([
            check("postId", "please provide a valid postId").isUUID()
        ])
        , getPostByPostIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(postValidator)), putPostController)

PostRoute.route("/:postName")
    .get(
        asyncValidatorController([
            check("postName", "Name must be less than one hundred twenty-eight characters").isString().trim().escape()
        ])
        , getPostByPostNameController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(postValidator)), putPostController)


PostRoute.route("/create-post/:postId")
    .get(
        asyncValidatorController([
            check("postId", "please provide a valid postId").isUUID()
        ])
        , getPostByPostIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(postValidator)), putPostController)