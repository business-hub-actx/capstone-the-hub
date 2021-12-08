import {Request, Response} from "express";
import {postTag} from "../../utils/interfaces/PostTag";
import {Status} from "../../utils/interfaces/Status";
import {selectPostTagByPostTagPostId} from "../../utils/postTag/selectPostTagByPostId"
// import {selectPostTagByPostId} from "../../utils/tag/selectTagByTagName";
// import {selectAllTags} from "../../utils/tag/selectAllTags";
import {insertPostTag} from "../../utils/postTag/insertPostTag";


export async function createPostTagController(request: Request, response: Response): Promise<Response> {
    try {
        const {postTagPostId, postTagTagId} = request.body
        const postTag:postTag = {postTagId:null, postTagPostId:postTagPostId, postTagTagId:postTagTagId}
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
        const data: postTag | null = await selectPostTagByPostTagPostId(postTagId)
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

// export async function getTagByTagNameController(request: Request, response: Response) {
//     try {
//         const {tagName} = request.params
//         const data: Tag | null = await selectTagByTagName(tagName)
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
