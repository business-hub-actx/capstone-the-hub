import {Request, Response} from "express";
import {PostTag} from "../../utils/interfaces/PostTag";
import {Status} from "../../utils/interfaces/Status";
import {selectPostTagByPostId} from "../../utils/postTag/selectPostTagByPostId"
import {selectPostTagByTagId} from "../../utils/postTag/selectPostTagByTagId";
// import {selectAllTags} from "../../utils/tag/selectAllTags";
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

export async function getPostTagByPostTagIdController(request: Request, response: Response) {
    try {
        const {postTagId} = request.params
        const data: PostTag | null = await selectPostTagByPostId(postTagId)
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

export async function getPostTagByPostTagTagId(request: Request, response: Response) {
    try {
        const {tagName} = request.params
        const data: PostTag | null = await selectPostTagByTagId(tagName)
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
//
// export async function getAllTagsController(request: Request, response: Response) {
//     try {
//
//         const data = await selectAllTags()
//         const status: Status = {
//             status: 200,
//             data: data,
//             message: null
//         }
//         return response.json(status)
//     } catch (error: any) {
//         return (response.json({status: 400, data: null, message: error.message}))
//     }
// }
