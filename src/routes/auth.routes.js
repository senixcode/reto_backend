import {Router} from 'express'
const  router = Router()
import AuthController from '../controllers/auth.controller'
router.post("/signup",AuthController.signUp)
router.post("/signin",AuthController.signIn)
export default router