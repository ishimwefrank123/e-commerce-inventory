
import { Request, Response } from "express"
import productValidationSchema from "./product.validation"
import { ProductServices } from "./product.service";

const createProduct = async (req: Request,res: Response) =>{
  try{
    // console.log(req.body)
    const zodParser = productValidationSchema.parse(req.body);
    const result = await ProductServices.createAProductIntoDB(zodParser);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: result
    })

  }catch(err : any){
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err
    })
  }
}

const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getProductsFromDB();
  res.status(201).json({
    success: true,
    message: "Products fetched successfully",
    data: result
  })
}

export const ProductControllers = {
  createProduct,
  getAllProducts
}