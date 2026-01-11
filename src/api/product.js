import api from "./axios";

export const addProduct = async (data) => {
  const res = await api.post("/api/products", data);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api.get(`/api/products/${id}`);
  return res.data;
};
export const getAllProducts = async () => {
  const res = await api.get("/api/products");
  return res.data;
};


//   export const getProductsByCategory = async () => {
//     const res = await api.get("/products");
//     return res.data;
//   };