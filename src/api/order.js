import api from "./axios";

 export const createOrder = async (data, token) => {
  const res = await api.post(
    "api/orders",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
export const getUserOrders = async (userId) => {
  const res = await api.get(`api/orders/${userId}`);
  return res.data;
};

export const getOrderDetails = async (orderId) => {
    const res = await api.get(`api/orders/${orderId}`);
    return res.data;
  };

  export const updateOrderStatus = async (orderId, status) => {
    const res = await api.put(`api/orders/${orderId}`, { status });
    return res.data;
  };