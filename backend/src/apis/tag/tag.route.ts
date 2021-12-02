import { getTagByTagIdController, getTagByTagNameController, postTagController } from "./tag.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {tagValidator} from "./tag.validator";

export const TagRoute: Router = Router();
TagRoute.route('/')
    .get(getAllTagsController)
    .post(asyncValidatorController(checkSchema (tagValidator)), postTagController);

TagRoute.route("/:tagId")
    .get(
        asyncValidatorController([
            check("tagId", "please provide a valid tagId").isUUID()
        ])
        , getTagByTagIdController
    )

TagRoute.route("/:tagName")
    .get(
        asyncValidatorController([
            check("tagName", "please provide a valid tagName").isString()
        ])
        , getTagByTagNameController
    )