import {httpConfig} from '../ui/share/utils/httpConfig'
import {createSlice} from "@reduxjs/toolkit";

const postTagSlice = createSlice({
    name: "postTag",
    initialState: [],
    reducers: {
        getPostTagsByPrimaryKey: (postTag, action) => {
            return action.payload
        },
        getPostTagByPostTagTagId: (postTag, action) => {
            return action.payload
        },
        setPostTagsByPostId: (postTags, action) => {
            postTags.push(...action.payload)
        }
    }
})

export const {getPostTagsByPrimaryKey, getPostTagByPostTagTagId, setPostTagsByPostId} = postTagSlice.actions


export const fetchPostTagsByPrimaryKey = (postTagPostId, postTagTagId) => async (dispatch) => {
    const {data} = await httpConfig(`/apis/postTag/postTagPostId/${postTagPostId}/postTagTagId/${postTagTagId}`);
    dispatch(getPostTagsByPrimaryKey(data))
}

export const fetchPostTagByPostTagTagId = (postTagTagId) => async (dispatch) => {
    const {data} = await httpConfig(`/apis/postTag/postTagId/${postTagTagId}`);
    dispatch(getPostTagByPostTagTagId(data))
}



export default postTagSlice.reducer
