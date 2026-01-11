import api from "./axios";

// Initialize payment: calls backend to get authorization URL & reference
export const initializePayment = async (orderId, amount, email, token) => {
  const res = await api.post(
    "api/payment/initialize",
    { orderId, amount, email },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data; // { authorizationUrl, reference }
};

// Verify payment: calls backend to confirm payment status
export const verifyPayment = async (reference, token) => {
  const res = await api.get(`api/payment/verify/${reference}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
