import auth from "./auth";
import profile from "./profile";
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import post from './post'
import tag from "./tag";
import postTag from "./postTag";

const reducer = combineReducers({auth, post, tag, profile, postTag})
export default configureStore({reducer});
