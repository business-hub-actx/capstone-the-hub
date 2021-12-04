import {Request, Response} from "express";
import {Post} from "../../utils/interfaces/Post";
import {Status} from "../../utils/interfaces/Status";
import {selectPostByPostId} from "../../utils/post/selectPostByPostId";
import {updatePost} from "../../utils/post/updatePost";

export async function putPostController(request: Request, response: Response) : Promise<Response>{
    try {
        const {postId} = request.params
        const {postId, postProfileId, postContactInfo, postEmail, postDescription, postPosition, postLogo, postCompany, postWebsite} = request.body
        const post = <Post>request.session.post
        const postIdFromSession = <string>post.postId

        return response.json()
    } catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}


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