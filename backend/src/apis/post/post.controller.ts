import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectPostByPostId} from "../../utils/post/selectPostByPostId";
import {selectAllPosts} from "../../utils/post/selectAllPosts"
import {selectPostByPostCompany} from "../../utils/post/selectPostByPostCompany"
import { selectPostByPostTagId } from "../../utils/post/selectPostByPostTagId";
import {Profile} from "../../utils/interfaces/Profile";
import {Post} from "../../utils/interfaces/Post";
import {insertPost} from "../../utils/post/insertPost";


export async function getAllPostController(request: Request, response: Response) : Promise<Response> {
    try {
        const data = await selectAllPosts();
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {

return (response.json({status: 400, data: null, message: error.message}))
    }}



export async function getPostByPostId(request: Request, response: Response) : Promise<Response> {
    try {
        const {postId} = request.params;
        const mySqlResult = await selectPostByPostId(postId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

    export async function getPostByPostCompany(request: Request, response: Response) : Promise<Response> {
        try {
            const {postId} = request.params;
            const mySqlResult = await selectPostByPostCompany(postId);
            const data = mySqlResult ?? null
            const status: Status = {status: 200, data, message: null}
            return response.json(status)

        } catch (error: any) {
            return (response.json({status: 400, data: null, message: error.message}))

        }


    }



export async function getPostByPostTagId(request: Request, response: Response) : Promise<Response> {
    try {
        const {tagId} = request.params;
        console.log(tagId)
        const mySqlResult = await selectPostByPostTagId(tagId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))

    }
}

export async function createPostController(request: Request, response: Response) : Promise<Response> {
    try {
        const profile:Profile = request.session.profile as Profile
        const postProfileId = profile.profileId as string
        const {postCompany,postDescription,postEmail,postLogo,postWebsite,postContactInfo,postPosition} = request.body
        const post:Post = {postId:null,postProfileId,postCompany,postDescription,postEmail,postLogo,postWebsite,postContactInfo,postPosition}
        await insertPost(post)
        return(response.json({status:200,data:null,message:"job posting created successfully"}))

    }catch (error: any)
    { return (response.json({status: 400, data: null, message: error.message}))}
}
