import {
    getAllProfilesController,
    getPartialProfileByProfileIdController,
    getProfileByProfileEmailController,
    getProfileByProfileIdController,
    getProfileByProfileNameController,
    getProfilesByProfileTagIdController,
    putProfileController
} from "./profile.controller";
import { Router } from "express";
import { asyncValidatorController } from "../../utils/controllers/asyncValidator.controller";
import { check, checkSchema } from "express-validator";
import { isLoggedIn } from "../../utils/controllers/isLoggedIn.controller";
import { profileValidator } from "./profile.validator";

export const ProfileRoute: Router = Router();
ProfileRoute.route('/')
    .post(putProfileController).get(getAllProfilesController
)

// Profile Id
ProfileRoute.route("/:profileId")
    .get(
        asyncValidatorController([
            check("profileId", "please provide a valid profile Id").isUUID()
        ])
        , getProfileByProfileIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)

// Partial Profile Id
ProfileRoute.route("/partial/:profileId")
    .get(
        asyncValidatorController([
            check("profileId", "please provide a valid profile Id").isUUID()
        ])
        , getPartialProfileByProfileIdController
    )

// Profile Name
ProfileRoute.route("/name/:profileName")
    .get(
        asyncValidatorController([
            check("profileName", "Name must be less than one hundred twenty-eight characters").isString().trim().escape()
        ])
        , getProfileByProfileNameController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)

// Profile Email
ProfileRoute.route("/email/:profileEmail")
    .get(
        asyncValidatorController([
            check("profileEmail", "Must provide a valid email address").isEmail().trim().escape()
        ])
        , getProfileByProfileEmailController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)

// Profile Tag
ProfileRoute.route("/tag/:profileTag")
    .get(
        asyncValidatorController([
            check("profileTagId", "Must provide a valid tag id").isUUID()
        ])
        , getProfilesByProfileTagIdController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)

// Profile Update
ProfileRoute.route("/:profileId")
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)

// Get All Profiles
ProfileRoute.route("/all/:profileId")
    .get(
        asyncValidatorController([
            check("profileId", "").isUUID()
        ])
        , getAllProfilesController
    )
    .put(isLoggedIn, asyncValidatorController(checkSchema(profileValidator)), putProfileController)

