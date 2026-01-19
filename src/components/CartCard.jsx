  import React, { useState, useEffect } from 'react'
  import { useSelector, useDispatch} from 'react-redux'
  import { RiDeleteBin6Line } from 'react-icons/ri'
  import { AiOutlineShoppingCart } from 'react-icons/ai'
  import { MdCancel } from 'react-icons/md'
  import emptyCart from '../assets/gqshop/empty-cart.png'
  import ItemsAdded from './ItemsAdded'
  import axios from 'axios'
  import { removeFromCart, updateQuantity } from "../cart/cartSlice";
  import { Link, useNavigate } from "react-router-dom";
  import { useAuth } from "../context/AuthContext";
  import { getCartByUser, updateCart, deleteCartItem } from "../api/cart";
  import { setCartItems } from "../cart/cartSlice";

  const CartCard = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
        const dispatch = useDispatch();
    const { user, token, isAuthenticated, logout } = useAuth();

    useEffect(() => {
      if (!isAuthenticated) {
        navigate("/login");
        return;
      }
      fetchCartFromBackend();
    }, [isAuthenticated]);


    const toggleCart = () => setIsOpen(!isOpen)

      const fetchCartFromBackend = async () => {
        try {
          const items = await getCartByUser();
          dispatch(setCartItems(items));
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
          await fetchCartFromBackend();
        } catch (err) {
          console.error("Failed to update quantity:", err.response?.data || err.message);
        }
      };

    const handleRemoveItem = async (cartItemId) => {
      try {
        await deleteCartItem(cartItemId);
        await fetchCartFromBackend();
      } catch (err) {
        console.error("Failed to remove item:", err.response?.data || err.message);
      }
    };
    
    return (
      <div>
        {/* Floating Cart Icon when cart is closed */}
        {!isOpen && (
          <div className='bg-white rounded-full p-2 shadow-lg cursor-pointer'>
          <AiOutlineShoppingCart onClick={toggleCart} size={24} />
          </div>
        )}

        {/* Cart Modal */}
        {isOpen && (
          <div className='absolute right-5  w-96 bg-white shadow-lg rounded-md p-4 z-50'>
            <div className='flex items-center justify-between mb-4'>
              <AiOutlineShoppingCart size={24} />
              <MdCancel className='text-red-500 cursor-pointer' size={24} onClick={toggleCart} />
            </div>

            {/* Empty Cart */}
            {cartItems.length === 0 ? (
              <div className='flex flex-col items-center text-center'>
                <img src={emptyCart} alt="Empty Cart" className='w-40 mb-4' />
                <p className='font-medium'>Sorry, your cart is empty!</p>
                <p className='text-xs text-gray-500'>Looks like you haven't added any product to your cart yet.</p>
              </div>
            ) : (
              // Cart items
              <div>
                 <ItemsAdded cartItems={cartItems}
              onQtyChange={handleQtyChange}
              onRemoveItem={handleRemoveItem} />
              <Link to='/cart'>
              <button className='mt-4 px-4 py-2 w-full  text-sm  rounded-lg border bg-blue-600 text-white'>
                Proceed 
              </button>
            </Link>
                </div>
             
            )}
          
          </div>
        )}
      </div>
    )
  }

  export default CartCard
