import {Schema} from 'express-validator';

export const tagValidator: Schema = {

    tagName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Name must be less than thirty two characters',
            options: {min: 1, max: 32}
        }
    }
}