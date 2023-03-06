import { Router } from 'express'
import techController from '../controllers/tech.controller.js'

const router = Router()

router.post("/create", techController.createTech)

export default router