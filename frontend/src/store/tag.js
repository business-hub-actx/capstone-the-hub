import {httpConfig} from '../ui/share/utils/httpConfig'
import {combineReducers} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

const tagSlice = createSlice ({
    name: "tag",
    initialState: [],
    reducers: {
        getAllTags: (tag,action) => {
            return action.payload
        }
    }
})

export const {getAllTags} = tagSlice.actions

export const fetchAllTags = () => async (dispatch) => {
    const {data} = await httpConfig('/apis/tag');
    dispatch(getAllTags(data))
}

export default tagSlice.reducer