import auth from "./auth";
import profile from "./profile";
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import post from './post'
import tag from "./tag";

const reducer = combineReducers({auth, post, tag, profile})
export default configureStore({reducer});
