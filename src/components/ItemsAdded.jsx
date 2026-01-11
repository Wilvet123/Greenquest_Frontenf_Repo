import { RiDeleteBin6Line } from "react-icons/ri";

const ItemsAdded = ({ cartItems, onQtyChange, onRemoveItem }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      {cartItems.map((item) => (
        <div key={item._id} className="flex items-center gap-10 py-4">
          <img src={item.productId?.image} alt={item.productId?.name} className="w-32 object-cover" />

          <div className="px-8">
            <h1 className="font-semibold">{item.productId?.name}</h1>

            <div>
              <h4 className="text-sm text-gray-600">1 pack</h4>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => onQtyChange(item._id, item.quantity - 1)}
                  className="border border-black rounded-md py-1 px-2 text-blue-600 font-bold"
                >
                  -
                </button>

                <p>{item.quantity}</p>

                <button
                  onClick={() => onQtyChange(item._id, item.quantity + 1)}
                  className="border border-black rounded-md py-1 px-2 text-blue-600 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <h1 className="text-black font-bold mt-2">
            ₦{(item.productId?.price || 0).toLocaleString()}
            </h1>
          </div>

          <button
            onClick={() => onRemoveItem(item._id)}
            className="text-red-600 pl-8"
          >
            <RiDeleteBin6Line size={40} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemsAdded;
