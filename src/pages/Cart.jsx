import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import emptyCart from '../assets/gqshop/empty-cart.png';
import ItemsAdded from "../components/ItemsAdded";
import ShoppingForm from "../components/shop/ShoppingForm";
import { getCartByUser, updateCart, deleteCartItem } from "../api/cart";
import { setCartItems } from "../cart/cartSlice";
import { useAuth } from "../context/AuthContext";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    fetchCartFromBackend();
  }, [isAuthenticated]);

  const fetchCartFromBackend = async () => {
    try {
      const items = await getCartByUser();
      const sanitizedItems = items.map(item => ({
        ...item,
        price: item.price && Number(item.price) > 0
          ? Number(item.price)
          : Number(item.productId?.price) || 0,
        quantity: Number(item.quantity) || 1,
      }));
      dispatch(setCartItems(sanitizedItems));
    } catch (err) {
      console.error("Failed to fetch cart:", err.response?.data || err.message);
      if (err.response?.status === 401) {
        logout();
        navigate("/login");
      }
    }
  };

  const handleQtyChange = async (cartItemId, qty) => {
    if (qty < 1) return;
    try {
      await updateCart(cartItemId, qty);
      const updatedCart = cartItems.map(item =>
        item._id === cartItemId ? { ...item, quantity: qty } : item
      );
      dispatch(setCartItems(updatedCart));
    } catch (err) {
      console.error("Failed to update quantity:", err.response?.data || err.message);
    }
  };

  const handleRemoveItem = async (cartItemId) => {
    try {
      await deleteCartItem(cartItemId);
      const updatedCart = cartItems.filter(item => item._id !== cartItemId);
      dispatch(setCartItems(updatedCart));
    } catch (err) {
      console.error("Failed to remove item:", err.response?.data || err.message);
    }
  };

  // ✅ Safe subtotal calculation
  const subtotal = useMemo(() => {
    if (!cartItems || cartItems.length === 0) return 0;

    return cartItems.reduce((acc, item) => {
      const rawPrice = item.price ?? item.productId?.price ?? 0;
      const price = parseFloat(String(rawPrice).replace(/[^0-9.]/g, "")) || 0;
      const qty = parseInt(item.quantity) || 1;
      return acc + price * qty;
    }, 0);
  }, [cartItems]);

  return (
    <div className="my-20 px-4 md:px-10 lg:px-20">
      {cartItems.length === 0 ? (
        <div className='p-4 w-full max-w-md mx-auto shadow-md flex flex-col justify-center items-center'>
          <div className='flex items-center justify-center text-3xl mb-4'>
            <AiOutlineShoppingCart />
          </div>
          <img src={emptyCart} alt="Empty Cart" className='object-cover w-1/2' />
          <p className="mt-4 font-semibold">Sorry, your cart is empty!</p>
          <p className='text-xs text-center mt-1'>Looks like you haven't added any product</p>
        </div>
      ) : (
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='w-full md:w-1/2'>
            <h1 className="text-2xl font-bold">Preorder Form</h1>
            <h2 className="text-lg text-gray-700 mb-7">Be among the first to experience the best.</h2>
            <ShoppingForm subtotal={subtotal} />
          </div>

          <div className='w-full md:w-1/2'>
            <h1 className='pb-4 mb-4 border-b border-gray-300 text-2xl font-bold'>Order Summary</h1>
            <ItemsAdded
              cartItems={cartItems}
              onQtyChange={handleQtyChange}
              onRemoveItem={handleRemoveItem}
            />
            <h1 className="mt-6 pt-4 border-t border-gray-300 flex text-lg justify-between font-semibold">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </h1>
            
            <p className="py-4 text-lg"> The item ships on 24-06-2026</p>
            <Link to='/shop' className="flex items-center justify-center">
              <button className='mt-14   px-4 py-2 w-full md:w-1/2 text-sm rounded-lg border border-blue-600 text-blue-600'>
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
