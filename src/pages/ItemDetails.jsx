import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/CartSlice';
import { getProductById } from '../api/product';
import { addToUserCart } from '../api/cart';
import { useAuth } from '../context/AuthContext';   // ✅ NEW

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // -------------------- AUTH CONTEXT --------------------
  const { user, token, isAuthenticated } = useAuth();      // ✅ FIXED
  const [item, setItem] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
const [quantity, setQuantity] = useState(1);
  // -------------------- FETCH PRODUCTS --------------------
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setItem(data);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]); 

  if (loading) return <p>Loading products...</p>;

  // const item = products.find((p) => p._id === id);
  if (!item) return <p className="text-center mt-10">Item not found</p>;

  // -------------------- QUANTITY LOGIC --------------------
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const hasVariants = item.hasVariants && item.variants.length > 0;

  // 🔹 unique colors
  const colors = hasVariants
    ? [...new Set(item.variants.map(v => v.color))]
    : [];

  // 🔹 sizes for selected color
  const sizes = hasVariants
  ? [...new Set(
      item.variants
        .filter(v => v.stock > 0)
        .map(v => v.size)
    )]
  : [];
  // 🔹 selected variant
  const selectedVariant = hasVariants
    ? item.variants.find(
        v => v.color === selectedColor && v.size === selectedSize
      )
    : null;

  // -------------------- ADD TO CART --------------------
  const addItemToCart = async () => {
    if (!isAuthenticated || !user) {
      navigate("/login", {
        state: { from: `/item/${id}` }
      });
      return;
    }
  
    if (hasVariants && !selectedVariant) {
      alert("Please select color and size");
      return;
    }
  
    try {
      await addToUserCart(
        {
          userId: user._id,
          productId: item._id,
          quantity,
          price: item.price,
          selectedSpecs: {
            size: selectedSize,
            color: selectedColor
          }
        },
        token
      );
  
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart");
    }
  };
  
  

  // -------------------- UI --------------------
  return (
    <div className="flex justify-center items-center my-24">
      <div className="h-auto w-80 shadow-md justify-center mx-24 px-4 py-4">
        <img src={item.image} alt={item.name} className="w-full" />

        <div className="flex justify-between py-4">
          <h1>{item.name}</h1>
          <h1>${item.price}</h1>
        </div>

        {/* Size & Color Selection */}
        {hasVariants && (
          <div className="flex justify-between mb-4">
            <div className="flex flex-col">
              <h2 className="mb-2">Select Color:</h2>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`border border-black rounded-md py-1 px-2 ${
                      selectedColor === color
                      ? 'bg-blue-500 text-white' : ''
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="mb-2">Select size:</h2>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border border-black rounded-md py-1 px-2 ${
                      selectedSize === size ? 'bg-blue-500 text-white' : ''
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="py-4">
          <h2>Quantity:</h2>
          <div className="flex justify-between items-center border border-black rounded-md py-1 px-2">
            <button onClick={decreaseQty}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQty}>+</button>
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={addItemToCart}
          className="mt-4 px-2 py-2 w-full text-sm rounded-lg bg-blue-600 text-white"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ItemDetails;
