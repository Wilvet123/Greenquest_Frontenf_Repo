import { RiDeleteBin6Line } from "react-icons/ri";

const ItemsAdded = ({ cartItems, onQtyChange, onRemoveItem }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center gap-3 md:gap-10 py-4 border-b"
        >
          <img
            src={item.productId?.image}
            alt={item.productId?.name}
            className="w-20 md:w-32 object-cover rounded flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <h1 className="font-semibold truncate">
              {item.productId?.name}
            </h1>

            <div className="flex gap-2 items-center mt-2">
              <button
                onClick={() => onQtyChange(item._id, item.quantity - 1)}
                className="border border-gray-300 rounded-md py-1 px-2 text-blue-600 font-bold"
              >
                -
              </button>

              <p>{item.quantity}</p>

              <button
                onClick={() => onQtyChange(item._id, item.quantity + 1)}
                className="border border-gray-300 rounded-md py-1 px-2 text-blue-600 font-bold"
              >
                +
              </button>
            </div>

            <h1 className="text-black font-bold mt-2">
              ₦{(item.productId?.price || 0).toLocaleString()}
            </h1>
          </div>

          <button
            onClick={() => onRemoveItem(item._id)}
            className="text-red-600 flex-shrink-0"
          >
            <RiDeleteBin6Line size={22} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemsAdded;
