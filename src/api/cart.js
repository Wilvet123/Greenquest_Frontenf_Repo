import api from "./axios";
export const addToUserCart = async (
  {  productId, quantity, price, selectedSpecs = {} },
  token
) => {
  if (!token) throw new Error("User is not authenticated");

  const res = await api.post(
    "api/cart/add",
    { productId, quantity, price, selectedSpecs },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const getCartByUser = async () => {
  const res = await api.get("api/cart");
  return res.data.items;
};

export const updateCart = async (cartItemId,quantity) => {
    const res = await api.put(`api/cart/${cartItemId}`,{quantity});
    return res.data;
  };

  export const deleteCartItem = async (cartItemId,userId) => {
    const res = await api.delete(`api/cart/${cartItemId}`);
    return res.data;
  };