import {Router} from 'express'
const  router = Router()
import UserController from '../controllers/user.controller'
import {authJwt} from '../middlewares'
router.get('/find',authJwt.verifyToken, UserController.all)
router.get('/findById/:id',authJwt.verifyToken,UserController.getById)
router.put('/updateById/:id',authJwt.verifyToken,UserController.updateById)
router.delete('/deleteById/:id',UserController.deleteById)
export default router