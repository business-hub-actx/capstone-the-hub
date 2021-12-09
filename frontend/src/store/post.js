import {httpConfig} from '../ui/share/utils/httpConfig'
import {combineReducers} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

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

export const fetchAllPosts = () => async (dispatch) => {
    const {data} = await httpConfig('/apis/post');
    dispatch(getAllPosts(data))
}

export default postSlice.reducer
