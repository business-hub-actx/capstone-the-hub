import {httpConfig} from '../ui/share/utils/httpConfig'
import {createSlice} from "@reduxjs/toolkit";

const profileTagSlice = createSlice({
    name: "profileTag",
    initialState: [],
    reducers: {
        getProfileTagsByPrimaryKey: (profileTag, action) => {
            return action.payload
        },
        getProfileTagByProfileTagTagId: (profileTag, action) => {
            return action.payload
        },
        setProfileTagsByProfileId: (profileTags, action) => {
            profileTags.push(...action.payload)
        }
    }
})

export const {getProfileTagsByPrimaryKey, getProfileTagByProfileTagTagId, setProfileTagsByProfileId} = profileTagSlice.actions


export const fetchProfileTagsByPrimaryKey = (profileTagProfileId, profileTagTagId) => async (dispatch) => {
    const {data} = await httpConfig(`/apis/profileTag/profileTagProfileId/${profileTagProfileId}/profileTagTagId/${profileTagTagId}`);
    dispatch(getProfileTagsByPrimaryKey(data))
}

export const fetchProfileTagByProfileTagTagId = (profileTagTagId) => async (dispatch) => {
    const {data} = await httpConfig(`/apis/profileTag/profileTagId/${profileTagTagId}`);
    dispatch(getProfileTagByProfileTagTagId(data))
}



export default profileTagSlice.reducer
