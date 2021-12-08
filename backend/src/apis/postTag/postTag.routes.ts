import {Router} from "express"
import {createPostTagController, getPostTagByPostTagIdController} from './postTag.controller'

export const postTagRoute = Router()

postTagRoute.route("/")
    .post(createPostTagController)
postTagRoute.route("/")
    .post(getPostTagByPostTagIdController)