import auth from "./auth";
import profile from "./profile";
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import post from './post'
import tag from "./tag";
import postTag from "./postTag";
import profileTag from "./profileTag";

const reducer = combineReducers({auth, post, tag, profile, postTag, profileTag})
export default configureStore({reducer});
