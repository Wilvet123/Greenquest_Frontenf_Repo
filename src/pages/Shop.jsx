import React, { useEffect, useState } from 'react';
import RebirthOfIdah from '../assets/gqshop/rebirth-of-idah-pic.png';
import { Link } from 'react-router-dom';
import CartCard from '../components/CartCard';
import { getAllProducts } from '../api/product';
import { useAuth } from '../context/AuthContext';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        console.log("API RESPONSE:", data); // should now log array of products
        setProducts(Array.isArray(data) ? data : []); // safe fallback
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div className='relative'>
      {/* Banner Image */}
      <img src={RebirthOfIdah} alt="Rebirth of Idah" className='pt-16 w-full object-cover' />

      <div className='flex gap-4 absolute top-24 right-16'>
        <Link to='/login'>
          <button className='px-2 py-1 text-sm rounded bg-blue-600 text-white'>Sign In</button>
        </Link>
      </div>

      {/* All Products Section */}
      <h1 className='py-7 text-2xl font-bold mx-10'>All Products</h1>
      <div className='flex flex-wrap justify-center gap-12 px-10'>
        {Array.isArray(products) && products.map((item) => (
          <div key={item._id} className='h-64 w-56 rounded-lg shadow-md p-2'>
            <img src={item.image} alt={item.name} className='h-36 w-full rounded-md object-cover mb-3' />
            <h2 className='text-lg font-semibold'>{item.name}</h2>
            <div className='flex justify-between items-center mt-3'>
              <span className='font-medium'>${item.price}</span>
              <Link to={`/item/${item._id}`}>
                <button className='px-2 py-1 text-sm rounded bg-blue-600 text-white'>Preorder</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Panel */}
      {user && <CartCard />}
    </div>
  )
};

export default Shop;
