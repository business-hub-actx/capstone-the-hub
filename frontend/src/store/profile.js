import {httpConfig} from '../ui/share/utils/httpConfig'
import {createSlice} from '@reduxjs/toolkit'
import {fetchAuth} from './auth'

const profileSlice = createSlice({
    name: "profile",
    initialState: null,
    reducers: {
        getProfileByProfileId: (profile, action) => {
            return action.payload
        },
        getAllProfiles: (profile, action) => {
            return action.payload
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
    dispatch(getAllProfiles(data))
}

export default profileSlice.reducer
