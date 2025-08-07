import express from "express";
import { ProductControllers } from "./product.controller";
import { verifyToken } from "../../middleware/authMiddleware";
import { isAdmin } from "../../middleware/adminMiddleware";
const router = express.Router()

router.get('/',  ProductControllers.getAllProducts)
router.post('/', verifyToken , ProductControllers.createProduct)
router.get('/:productId', ProductControllers.getSingleProduct)
router.put('/:productId', verifyToken ,ProductControllers.updateProduct)
router.delete('/:productId', verifyToken, isAdmin, ProductControllers.deleteProduct)




export const ProductRoutes = router