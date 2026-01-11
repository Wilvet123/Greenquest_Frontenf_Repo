import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/CartSlice";
import api from "../api/axios";
import successImage from '../assets/payment-success.png';
const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const reference = params.get("reference") || params.get("trxref"); 
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    if (!reference) {
      setLoading(false);
      setSuccess(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/payment/verify/${reference}`);
        console.log("Payment verification response:", res.data);

        // Mark as success if completed or Paid
        if (res.data.status === "Completed" || res.data.order?.status === "Paid") {
          dispatch(clearCart());
          setOrderId(res.data.order?.orderId || null);
          setSuccess(true);
        } else {
          setSuccess(false);
        }
      } catch (err) {
        console.error("Verification error:", err);
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [reference]);

  if (loading) return <p className="text-center mt-10">Verifying payment...</p>;

//   if (!success) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen text-center">
//         <h1 className="text-3xl font-bold text-red-600 mb-4"></h1>
//         <p className="mb-4"></p>
//         <Link
//           to="/"
//           className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
//         >
// Continue         </Link>
//       </div>
//     );
//   }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <img src={successImage} alt="Payment Successful" className="w-80 h-80 mb-4" />
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank you for your patronage</h1>
      <p className="mb-2">Your order is being processed check your email for more details</p>
      
      <Link
        to="/"
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
Continue Shopping      </Link>
    </div>
  );
};

export default PaymentSuccess;
