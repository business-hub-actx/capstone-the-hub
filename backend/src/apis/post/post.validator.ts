import {Schema} from 'express-validator';

export const postValidator: Schema = {
    postId: {
        isUUID:{
            errorMessage: 'Please provide a valid postID'
        }
    },

    postProfileId: {
        isUUID: {
            errorMessage: "Please provide a valid email"
        },
        trim: true
    },

    postContactInfo: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: "Post must be under two hundred-fifty-five characters",
            options: {min: 1, max: 255}
        },

    },


    postEmail: {
        isEmail: {
            errorMessage: "Please provide a valid email"
        },
        trim: true
    },

    postDescription: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Must be under one-thousand two-hundred-eighty characters',
            options: {min: 1, max: 1280}
        }
    },

    postPosition: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Must be under one-hundred twenty-eight characters',
            options: {min: 1, max: 128}
        }
    },



    postLogo: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Must be under one-hundred twenty-eight characters',
            options: {min: 1, max: 180}
        }
    },

    postCompany: {
        isLength: {
            errorMessage: 'Company name must be under thirty-two characters'
        },
        trim: true
    },

    postWebsite: {
        isURL: {
            errorMessage: "Please provide a valid URL"
        },
        trim: true
    },

}
