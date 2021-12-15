import {Schema} from "express-validator";

export const profileTagValidator: Schema = {
    profileTagProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid profile tag profile id'
        }
    },

    profileTagTagId: {
        isUUID: {
            errorMessage: 'please provide a valid profile tag tag id'
        }
    },
}