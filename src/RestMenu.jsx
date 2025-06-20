import { useParams,Link } from "react-router";
import { useEffect, useState} from "react";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer_Menu";
export default function RestMenu() {
   let  {id} = useParams();
   const [RestData, setRestData]=  useState([]);
   const [Selected,setSelected]=useState(null);
   useEffect(()=>{
      async function fetchData(){
         const proxyServer="https://cors-anywhere.herokuapp.com/"; // Use a proxy server to bypass CORS issues
         const swiggyAPI="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId="+id+"&submitAction=ENTER";
         const response=await fetch(proxyServer+swiggyAPI);
         const data=await response.json();
         const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
         const filteredData = tempData.filter((item) => {
            const card = item?.card?.card;
            return (
               'title' in card &&
               (
                  Array.isArray(card?.itemCards) || Array.isArray(card?.categories)   
               )
            );
         });
         setRestData(filteredData);
      }
      fetchData();
   },[id])
   console.log("inRestMenu");
     if (!RestData || RestData.length === 0) {
       return <Shimmer />;
     }
   return(
      <div className="w-[60%] mx-auto mt-10 flex flex-col items-center p-5">
         <div className="w-full flex mb-5 gap-20 relative">
            <div className="flex gap-5">
               <button className={`text-l font-bold rounded-xl px-3 py-1 border-[2px] hover:cursor-pointer ${Selected === "veg" ? "border-green-700 text-green-700" : "border-gray-400"}`}onClick={() => setSelected(Selected === "veg" ? null : "veg")}>Veg</button>
               <button className={`text-l font-bold rounded-xl px-3 py-1 border-[2px] hover:cursor-pointer ${Selected === "nonveg" ? "border-red-700 text-red-700" : "border-gray-400"}`}onClick={() => setSelected(Selected === "nonveg" ? null : "nonveg")}>
                  Non Veg</button>
            </div>
               <Link to={`/city/kolkata/${id}/search`}>
                  <input type="text" placeholder="Search for dishes" className="bg-red-100 w-150 rounded-xl p-2"/>
               </Link>
         </div>
         {
            RestData.map((menu)=><MenuCard key={menu?.card?.card?.title} menuItems={menu?.card?.card} selected={Selected}></MenuCard>)
         }
      </div>
   )
}