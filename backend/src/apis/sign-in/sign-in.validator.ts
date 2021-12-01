import {Schema} from 'express-validator';

export const signInValidator : Schema = {
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least ten characters',
            options: { min: 10 }
        },
        trim: true,
        escape: true
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    }
};
