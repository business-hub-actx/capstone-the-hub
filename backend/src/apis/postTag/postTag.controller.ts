import {Request, Response} from "express";
import {PostTag} from "../../utils/interfaces/PostTag";
import {Status} from "../../utils/interfaces/Status";
import {selectPostTagByPostId} from "../../utils/postTag/selectPostTagByPostId"
import {selectPostTagByTagId} from "../../utils/postTag/selectPostTagByTagId";
import {selectPostTagByPrimaryKey} from "../../utils/postTag/selectPostTagByPrimaryKey";
import {insertPostTag} from "../../utils/postTag/insertPostTag";



export async function createPostTagController(request: Request, response: Response): Promise<Response> {
    try {
        const {postTagPostId, postTagTagId} = request.body
        const postTag:PostTag = {postTagId:null, postTagPostId:postTagPostId, postTagTagId:postTagTagId}
        await insertPostTag(postTag)
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

export async function getPostTagByPostIdController(request: Request, response: Response) {
    try {
        const {postId} = request.params
        console.log(postId)
        const data: PostTag[] = await selectPostTagByPostId(postId)
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

export async function getPostTagByPostTagTagIdController(request: Request, response: Response) {
    try {
        const {tagId} = request.params
        const data: PostTag[] = await selectPostTagByTagId(tagId)
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

export async function getPostTagByPrimaryKey(request: Request, response: Response) {
    try {
        const {postId, tagId} = request.params
        const postTag = {postTagPostId:postId, postTagTagId:tagId}
        const data = await selectPostTagByPrimaryKey(postId, tagId)
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
