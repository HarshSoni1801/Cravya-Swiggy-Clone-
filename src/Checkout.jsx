import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "./CartSlicer";

export default function Checkout() {
   const dispatch = useDispatch();
   const cartItems = useSelector((store) => store.cartSlice.items);
   const totalItems = useSelector((store) => store.cartSlice.count);

   const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * (item.price ?? item.defaultPrice),0);

   function handleDelete(item) {
      while (item.quantity > 0) {
         dispatch(decrementItem(item));
      }
   }

   return (
      <div className="max-w-[900px] mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
         <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

         {cartItems.length === 0 ? (
            <p className="text-center text-gray-600 text-xl">Your cart is empty.</p>
         ) : (
            <>
               <div className="space-y-6">
                  {cartItems.map((item) => (
                     <div key={item.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex gap-4 items-center w-[60%]">
                           <img
                              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`}
                              alt={item.name}
                              className="w-40 rounded-xl object-cover shadow-md"
                           />
                           <div>
                              <h2 className="text-lg font-semibold">{item.name}</h2>
                              <p className="text-gray-500 text-sm">{item.description?.slice(0, 50)}</p>
                           </div>
                        </div>

                        <div className="flex items-center gap-3">
                           <button onClick={() => dispatch(decrementItem(item))} className="text-xl px-3 py-1 bg-red-100 rounded hover:bg-red-200">-</button>
                           <span className="font-semibold">{item.quantity}</span>
                           <button onClick={() => dispatch(incrementItem(item))} className="text-xl px-3 py-1 bg-green-100 rounded hover:bg-green-200">+</button>
                        </div>

                        <div className="text-right">
                           <p className="font-semibold">₹{((item.price ?? item.defaultPrice) * item.quantity / 100).toFixed(2)}</p>
                           <button className="text-red-500 text-sm underline mt-1 hover:text-red-700" onClick={() => handleDelete(item)}>Delete</button>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="mt-8 text-right">
                  <p className="text-lg font-semibold">Total Items: {totalItems}</p>
                  <p className="text-2xl font-bold">Grand Total: ₹{(totalPrice / 100).toFixed(2)}</p>
               </div>

               <div className="text-center mt-6">
                  <button className="bg-[#ff6461] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#fe8989] transition cursor-pointer shadow-lg">
                     Proceed to Pay
                  </button>
               </div>
            </>
         )}
      </div>
   );
}
