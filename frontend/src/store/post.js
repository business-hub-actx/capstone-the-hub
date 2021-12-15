import {httpConfig} from '../ui/share/utils/httpConfig'
import {combineReducers} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {getAllTags} from "./tag";
import _ from "lodash"
import {setPostTagsByPostId} from "./postTag";
const postSlice = createSlice ({
    name: "post",
    initialState: [],
    reducers: {
        getAllPosts: (post,action) => {
            return action.payload
        }
    }
})

export const {getAllPosts} = postSlice.actions

export const fetchPostsForJobListing = () => async (dispatch) => {
    const {data} = await httpConfig('/apis/post');
    const tags = await httpConfig('/apis/tag').data

    for (const post of data){
        const postId = post.postId
        const postTags = await httpConfig(`/apis/postTag/postTagPostId/${postId}`)
        if(postTags.data.length > 0){
            dispatch(setPostTagsByPostId(postTags.data))
        }
    }
    //Iterate over data and grab all post id's//
    //While grabbing post id's make and http request to get post tags by post id//
    //Dispatch set post tags by post id from step 2//
    //Grab George//

    dispatch(getAllPosts(data))
    dispatch(getAllTags(tags))
}

export const fetchPostsByTagJobListing = (id) => async (dispatch) => {
    const {data} = await httpConfig(`/apis/post/tagId/${id}`);
    const tags = await httpConfig('/apis/tag').data

    // for (const post of data){
    //     const postId = post.postId
    //     const postTags = await httpConfig(`/apis/postTag/postTagPostId/${postId}`)
    //     if(postTags.data.length > 0){
    //         dispatch(setPostTagsByPostId(postTags.data))
    //     }
    // }
    //
    //
    dispatch(getAllPosts(data))
    // dispatch(getAllTags(tags))
}


export default postSlice.reducer
