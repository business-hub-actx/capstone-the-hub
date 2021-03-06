import {Schema} from 'express-validator';

export const signupValidator: Schema = {



    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Name must be less than one hundred twenty eight characters',
            options: {min: 1, max: 128}
        },
    },

    profileJobTitle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'job title must be under one hundred twenty eight characters',
            options: {min: 1, max: 128}
        },
    },


    profileSkills: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Must be under two hundred fifty five characters',
            options: {min: 1, max: 255}
        },
    },

    profileAboutMe: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Bio must be under two hundred fifty five characters',
            options: {min: 1, max: 255}
        },
    },

    profileEmail: {
        isEmail: {
            errorMessage: "Please provide a valid email"
        },
        trim: true
    },

    profileUrl: {
        optional: true,
        isURL: {
            errorMessage: "URL must be less than one hundred twenty eight characters",
        },
    },

    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least ten characters',
            options: {min: 10}
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'confirm password must be at least ten characters',
            options: {min: 10}
        },
        trim: true,
        escape: true
    },
};




