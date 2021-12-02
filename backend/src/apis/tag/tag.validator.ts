import {Schema} from 'express-validator';

export const tagValidator: Schema = {
    tagId: {
        isUUID: {
            errorMessage: 'Please provide a valid tagID'
        }
    },

    tagName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Name must be less than thirty two characters',
            options: {min: 1, max: 32}
        }
    }
}