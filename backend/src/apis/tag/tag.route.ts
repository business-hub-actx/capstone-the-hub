import { getTagByTagIdController, getTagByTagNameController, putTagController } from "./tag.controller";
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {tagValidator} from "./tag.validator";

export const TagRoute: Router = Router();
TagRoute.route('/')
    .post(putTagController);

TagRoute.route("/:tagId")
    .get(
        asyncValidatorController([
            check("tagId", "please provide a valid tagId").isUUID()
        ])
        , getTagByTagIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(tagValidator)), putTagController)

TagRoute.route("/:tagName")
    .get(
        asyncValidatorController([
            check("tagName", "please provide a valid tagName").isString()
        ])
        , getTagByTagNameController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(tagValidator)), putTagController)