import type { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createAProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
}

const getProductsFromDB = async () => {
  const data = await Product.find();
  return data;
}

export const ProductServices = {
  createAProductIntoDB,
  getProductsFromDB
}