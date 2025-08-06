import type { TOrder } from "./order.interface"
import { OrderModel } from "./order.model"

const createNewOrder = async (orderData: TOrder) => {
  return await OrderModel.create(orderData)

}

export const OrderServices = {
  createNewOrder
}