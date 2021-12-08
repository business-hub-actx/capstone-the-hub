import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import {selectPostByPostId} from "../../utils/post/selectPostByPostId";
import {selectAllPosts} from "../../utils/post/selectAllPosts"
import {selectPostByPostCompany} from "../../utils/post/selectPostByPostCompany"
import { selectPostByPostTagPostId } from "../../utils/post/selectPostByPostTagPostId";


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



export async function getPostByPostTagPostId(request: Request, response: Response) : Promise<Response> {
    try {
        const {postId} = request.params;
        const mySqlResult = await selectPostByPostTagPostId(postId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))

    }


}