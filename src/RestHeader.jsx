import { useSelector } from "react-redux"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import logo from "./Logo.png"; 

export default function RestHeader() 
{
   const totalItems=useSelector((store)=>store.cartSlice.count);
   return(
      <div className="flex justify-between items-center px-45 py-3 shadow-md">
         <Link to={"/"} className="hover:cursor-pointer">  
            <img className="w-14" src={logo} alt="Cravya Logo" />
         </Link>
         <div>
            <Link to={"/Checkout"}>
               <button className="flex items-center gap-2 px-4 py-2 bg-[#ff6c69] text-white rounded-md shadow font-bold text-xl hover:bg-[#e02a2a] transition-colors duration-300 cursor-pointer">
                  <FaShoppingCart />
                  Cart - {totalItems}
               </button>
            </Link>
         </div>
      </div>
   )
}