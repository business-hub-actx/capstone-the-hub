import {Request, Response} from "express";
import {Tag} from "../../utils/interfaces/Tag";
import {Status} from "../../utils/interfaces/Status";
import {selectTagByTagId} from "../../utils/tag/selectTagByTagId"
import {selectTagByTagName} from "../../utils/tag/selectTagByTagName";
import {insertTag} from "../../utils/tag/insertTag";
import {selectAllTags} from "../../utils/tag/selectAllTags";


export async function createTagController(request: Request, response: Response): Promise<Response> {
    try {
        const {tagName} = request.body
        const tag:Tag = {tagId:null, tagName:tagName}
        await insertTag(tag)
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

export async function getTagByTagIdController(request: Request, response: Response) {
    try {
        const {tagId} = request.params
        const data: Tag | null = await selectTagByTagId(tagId)
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

export async function getTagByTagNameController(request: Request, response: Response) {
    try {
        const {tagName} = request.params
        const data: Tag | null = await selectTagByTagName(tagName)
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

export async function getAllTagsController(request: Request, response: Response) {
    try {

        const data = await selectAllTags()
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
