import {Request, Response} from "express";
import {ProfileTag} from "../../utils/interfaces/ProfileTag";
import {Status} from "../../utils/interfaces/Status";
import {selectProfileTagByProfileId} from "../../utils/profileTag/selectProfileTagProfileId"
import {selectProfileTagByTagId} from "../../utils/ProfileTag/selectProfileTagByTagId";
import {selectProfileTagByPrimaryKey} from "../../utils/ProfileTag/selectProfileTagByPrimaryKey";
import {insertProfileTag} from "../../utils/ProfileTag/insertProfileTag";



export async function createProfileTagController(request: Request, response: Response): Promise<Response> {
    try {
        const {profileTagProfileId, profileTagTagId} = request.body
        const profileTag:ProfileTag = {profileTagId: null, profileTagProfileId:profileTagProfileId, profileTagTagId:profileTagTagId}
        await insertProfileTag(profileTag)
        const status: Status = {
            status: 200,
            data: null,
            message: "Created Tag Sucessfully"
        }
        return response.json(status)

    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

export async function getProfileTagByProfileIdController(request: Request, response: Response) {
    try {
        const {profileId} = request.params
        console.log(profileId)
        const data: ProfileTag[] = await selectProfileTagByProfileId(profileId)
        const status: Status = {
            status: 200,
            data: data,
            message: null
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

export async function getProfileTagByProfileTagTagIdController(request: Request, response: Response) {
    try {
        const {tagId} = request.params
        const data: ProfileTag[] = await selectProfileTagByTagId(tagId)
        const status: Status = {
            status: 200,
            data: data,
            message: null
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

export async function getProfileTagByPrimaryKey(request: Request, response: Response) {
    try {
        const {profileId, tagId} = request.params
        const profileTag = {profileTagProfileId:profileId, profileTagTagId:tagId}
        const data = await selectProfileTagByPrimaryKey(profileId, tagId)
        const status: Status = {
            status: 200,
            data: data,
            message: null
        }
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}
