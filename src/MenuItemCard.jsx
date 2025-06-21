import {addItems,incrementItem,decrementItem} from "./CartSlicer";
import { useDispatch, useSelector } from "react-redux";
export default function MenuItemCard({itemData})
{
   console.log("In menucard");
   const dispatch = useDispatch();
   function handleAddItems(){
      dispatch(addItems(itemData));
   }
   function handleDecrementItems(){
      dispatch(decrementItem(itemData));
   }
   function handleIncrementItems(){
      dispatch(incrementItem(itemData));
   }
   const items=useSelector((store)=>store.cartSlice.items);
   const element=items.find((food)=>itemData.id===food.id);
   const itemCount=element? element.quantity:0;
   const price = itemData?.defaultPrice ?? itemData?.price;
   return(
      <>
      <div className="flex mt-5 mb-5 justify-between w-full">
         <div className="w-[70%] pr-20">
            {itemData?.isVeg === 1 ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] mb-1 inline-block mr-1" viewBox="0 0 20 20">
                  <rect x="1" y="1" width="18" height="18" rx="3" fill="white" stroke="green" strokeWidth="2"/>
                  <circle cx="10" cy="10" r="5" fill="green"/>
               </svg>
            ) : (
               <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] mb-1 inline-block mr-1" viewBox="0 0 20 20">
                  <rect x="1" y="1" width="18" height="18" rx="3" fill="white" stroke="red" strokeWidth="2"/>
                  <circle cx="10" cy="10" r="5" fill="red"/>
               </svg>
            )}

            <p className="text-xl text-gray-600 font-bold">{itemData?.name}</p>

            <p className="text-l text-gray-800 font-bold mb-[12px]">{"₹"+price/100}</p>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] inline-block mr-[5px]">
               <polygon points="12 2 15 8 22 8 17 12 19 18 12 14 5 18 7 12 2 8 9 8" fill="rgb(27,166,114)"/>
            </svg>
            <span className="text-[rgb(27,166,114)] font-bold">{itemData?.ratings?.aggregatedRating?.rating}</span>
            <span>{'('+itemData?.ratings?.aggregatedRating?.ratingCountV2+')'}</span>

            <p className="mt-[12px] line-clamp-2">{itemData?.description}</p>
         </div>
         <div className="w-[20%] flex flex-col items-center justify-end relative transition-all duration-300 ease-in-out">
            <img className="w-full h-40 object-cover rounded-3xl mb-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+itemData.imageId} alt="" />
            {
               itemCount===0?(<button className="hover:cursor-pointer font-bold absolute left-1/2 -translate-x-1/2 bottom-[-14px] text-[#FF3C38] px-7 py-2 bg-white rounded-xl border border-[#FF3C38] shadow-[0_8px_30px_rgba(0,0,0,0.3)] w-1/2 text-l" onClick={handleAddItems}>ADD</button>):(
                  <div className="flex items-center justify-between gap-2 Rubik  font-bold absolute left-1/2 -translate-x-1/2 bottom-[-14px] py-2 bg-white rounded-xl border border-[#FF3C38] shadow-[0_8px_30px_rgba(0,0,0,0.3)] text-l w-1/2">
                     <button className="text-xl px-2 hover:cursor-pointer hover:text-[#FF3C38]" onClick={handleDecrementItems}>-</button>
                     <span className="">{itemCount}</span>
                     <button className="text-xl px-2 hover:cursor-pointer hover:text-[#FF3C38]" onClick={handleIncrementItems}>+</button>
                  </div>
               )
            }
         </div>
      </div>
      <hr className="m-10 w-[70%] mx-auto border border-gray-300"></hr>
      </>
   )
}