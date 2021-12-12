import {Schema} from "express-validator";

export const postTagValidator: Schema = {
    postTagPostId: {
        isUUID: {
            errorMessage: 'please provide a valid post tag post id'
        }
    },

    postTagTagId: {
        isUUID: {
            errorMessage: 'please provide a valid post tag tag id'
        }
    },
}