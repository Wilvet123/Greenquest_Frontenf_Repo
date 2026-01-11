// src/pages/OrderSuccess.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const OrderSuccess = () => {
  const { orderId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Order Successful!
      </h1>
      <p className="mb-2">Thank you for your purchase.</p>
      {orderId && (
        <p className="text-gray-500 mb-4">
          Your Order ID: <span className="font-mono">{orderId}</span>
        </p>
      )}
      <Link
        to="/"
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default OrderSuccess;
