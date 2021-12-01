import {Schema} from 'express-validator';

export const signupValidator: Schema = {

    profilePhoto: {
        isLength: {
            errorMessage: 'Image path must be less than two hundred fifty five characters',
            options: {min: 1, max: 255}
        },
    },

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

    profileResume: {
        isLength: {
            errorMessage: 'Resume path must be less than 32 characters',
            options: {min: 1, max: 32}
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
        trim: true,
        escape: true
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




