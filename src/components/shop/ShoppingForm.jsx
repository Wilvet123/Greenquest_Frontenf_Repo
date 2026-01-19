import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../cart/cartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { createOrder } from "../../api/order";
import api from "../../api/axios";

const ShoppingForm = ({ subtotal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const reduxAuth = useSelector((state) => state.auth);
  const accessToken = localStorage.getItem("accessToken");
  const user = reduxAuth.user || JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address_line_1: "",
    city: "",
    state: "",
    country: "Nigeria",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    if (!accessToken || !userId) {
      alert("Please log in to continue");
      navigate("/login");
      return;
    }

    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    console.log("Cart items:", cartItems);
    console.log("Subtotal before order:", subtotal);

    // ✅ Safe totalAmount
    const totalAmount = Number((subtotal || 0).toFixed(2));

    try {
      setLoading(true);

      const orderRes = await createOrder(
        {
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          address_line_1: formData.address_line_1,
          address_line_2: "",
          city: formData.city,
          state: formData.state,
          country: formData.country,
          zip: "",
          totalAmount: Number(subtotal) || 0, // <-- force number here
        },
        accessToken
      );

      const orderId = orderRes.order.orderId;

      const paymentRes = await api.post("api/payment/initialize", {
        orderId,
        amount: totalAmount,
        email: formData.email,
        userId,
      });

      const paymentUrl = paymentRes.data?.data?.authorization_url;
      if (!paymentUrl) throw new Error("Payment URL not found");

      localStorage.setItem("pendingOrderId", orderId);
      window.location.href = paymentUrl;
    } catch (err) {
      console.error("Order error:", err);
      alert(
        err?.response?.data?.error ||
        err.message ||
        "Something went wrong while placing order"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const reference = query.get("reference");

    if (reference && accessToken) {
      verifyPayment(reference);
    }
  }, [location.search]);

  const verifyPayment = async (reference) => {
    try {
      setLoading(true);
      const verifyRes = await api.get(`api/payment/verify/${reference}`);

      if (
        verifyRes.data.status === "Completed" ||
        verifyRes.data.order?.status === "Paid"
      ) {
        dispatch(clearCart());
        localStorage.removeItem("pendingOrderId");
        navigate("/payment-success");
      } else {
        alert("Payment verification failed");
      }
    } catch (err) {
      console.error("Verification error:", err);
      alert("Error verifying payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg space-y-4">
      {[
        { name: "name", placeholder: "Name" },
        { name: "email", placeholder: "Email" },
        { name: "phone", placeholder: "Phone" },
        { name: "address_line_1", placeholder: "Address" },
        { name: "city", placeholder: "City" },
        { name: "state", placeholder: "State" },
        { name: "country", placeholder: "Country" },
      ].map((field) => (
        <div>
           <label className="font-semibold">{field.placeholder}</label>
        <input
          key={field.name}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          placeholder={field.placeholder}
          className="border p-2 w-full rounded"
        />
          </div>
       
      ))}

      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        {loading ? "Processing..." : "Place Order & Pay"}
      </button>
    </div>
  );
};

export default ShoppingForm;
