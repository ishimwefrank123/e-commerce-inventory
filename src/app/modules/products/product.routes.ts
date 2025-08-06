import express from "express";
import { ProductControllers } from "./product.controller";
const router = express.Router()

// router.get('/', ProductControllers.createProduct)
router.post('/', ProductControllers.createProduct)



export const ProductRoutes = router