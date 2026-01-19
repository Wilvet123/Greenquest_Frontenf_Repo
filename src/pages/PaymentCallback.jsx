import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";
import api from "../api/axios";
const PaymentCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const reference = query.get("reference");

    if (reference) {
      verifyPayment(reference);
    } else {
      alert("Payment reference not found");
      navigate("/checkout");
    }
  }, [location.search]);

  const verifyPayment = async (reference) => {
    try {
      setLoading(true);
      // ✅ Call backend to verify payment
      const res = await api.get(`api/payment/verify/${reference}`);
      
      if (res.data.order?.status === "Paid") {
        dispatch(clearCart());
        navigate("/payment-success"); // ✅ Redirect to success page
      } else {
        alert("Payment verification failed. Contact support.");
        navigate("/checkout");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying payment");
      navigate("/checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-20">
      {loading ? <p>Verifying your payment, please wait...</p> : null}
    </div>
  );
};

export default PaymentCallback;
