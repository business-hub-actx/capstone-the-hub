import {Request, Response} from "express";
import {Tag} from "../../utils/interfaces/Tag";
import {Status} from "../../utils/interfaces/Status";
import {selectTagByTagId} from "../../utils/tag/selectTagByTagId"
import {selectTagByTagName} from "../../utils/tag/selectTagByTagName";
import {updateTag} from "../../utils/tag/updateTag";


export async function putTagController(request: Request, response: Response): Promise<Response> {
    try {
        const {tagId} = request.params
        const {tagName} = request.body
        const tag = <Tag>request.session.tag
        const tagIdFromSession = <string>tag.tagId

        return response.json()

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
        const {tagId} = request.params
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
