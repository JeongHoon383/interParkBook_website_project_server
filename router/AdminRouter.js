import express from 'express'
import * as AdminController  from '../controller/AdminController.js'

const router = express.Router()

router.get(`/`,AdminController.getUserInfo)

router.post('/',AdminController.InsertBook)

router.post('/delete',AdminController.DeleteBook)

export default router