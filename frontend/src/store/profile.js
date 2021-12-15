import {httpConfig} from '../ui/share/utils/httpConfig'
import {combineReducers} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {fetchAuth} from './auth'
import {setPostTagsByPostId} from "./postTag";
import {setProfileTagsByProfileId} from "./profileTag";
import {getAllTags} from "./tag";

const profileSlice = createSlice({
    name: "profile",
    initialState: null,
    reducers: {
        getProfileByProfileId: (profile, action) => {
            return action.payload
        },
        getAllProfiles: (profile, action) => {
            return action.payload
        },
        sortProfilesByTag: (profiles, action) => {
            return profiles
        }

    }
})

export const {getProfileByProfileId} = profileSlice.actions
export const fetchProfileByProfileId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    console.log(auth)
    if (auth !== null) {
        const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
        console.log(data)
        dispatch(getProfileByProfileId(data))
    }
}

export const {getAllProfiles} = profileSlice.actions

export const fetchAllProfiles = () => async (dispatch) => {
    const {data} = await httpConfig('/apis/profile');
    const tags = await httpConfig('/apis/tag').data

    for (const profile of data) {
        const profileId = profile.profileId
        const profileTags = await httpConfig(`/apis/profileTag/profileTagProfileId/${profileId}`)
        if (profileTags.data.length > 0) {
            dispatch(setProfileTagsByProfileId(profileTags.data))
        }
    }
    dispatch(getAllProfiles(data))
    dispatch(getAllTags(tags))
}

export default profileSlice.reducer
