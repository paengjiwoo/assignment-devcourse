import { OrderSheet, orderListItem } from "../models/order.model";
import { httpClient, requestHandler } from "./http";

export const order = async (orderData: OrderSheet) => {
  return await requestHandler<OrderSheet>("post", "/orders", orderData);
}

export const fetchOrders = async () => {
  const response = await httpClient.get("/orders");
  return response.data;
};

export const fetchOrder = async (orderId: number) => {
  const response = await httpClient.get<orderListItem>(`/orders/${orderId}`);
  return response.data;
}