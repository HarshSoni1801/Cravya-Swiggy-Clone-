import { useParams } from "react-router"
import { useState,useEffect } from "react"
import MenuItemCard from "./MenuItemCard";
export default function Search() {
   const [FoodName,setFoodName]=useState("");
   const {id} = useParams();
   const [SearchableData, setSearchableData]=  useState([])
   console.log("Search = ",FoodName);
   function extarctUniqueItems(filteredData){
      const seenIds=new Set();
      const allItems=[];
      filteredData.forEach((category)=>{
         const mainCard=category?.card?.card;

         if(Array.isArray(mainCard?.itemCards)){
            mainCard?.itemCards.forEach((item)=>{
               const info=item?.card?.info;
               if(info && !seenIds.has(info.id)){
                  seenIds.add(info.id);
                  allItems.push(info);
               }
            })
         }
         if(Array.isArray(mainCard?.categories)){
            const subCategories=mainCard?.categories;
            subCategories.forEach((subCategory)=>{
               if(Array.isArray(subCategory?.itemCards)){
                  subCategory?.itemCards.forEach((item)=>{
                     const info=item?.card?.info;
                     if(info && !seenIds.has(info.id)){
                        seenIds.add(info.id);
                        allItems.push(info);
                     }
                  })
               }
            })
         }
      })
      return allItems;
   }
   useEffect(()=>{
      async function fetchData(){
         console.log("before data fetch")
         const proxyServer="https://cors-anywhere.herokuapp.com/"; // Use a proxy server to bypass CORS issues
         const swiggyAPI="https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId="+id+"&submitAction=ENTER";
         const response=await fetch(proxyServer+swiggyAPI);
         const data=await response.json();
         console.log("After data fetch")
         const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
         const filteredData = tempData.filter((item) => {
            const card = item?.card?.card;
            return ('title' in card &&(Array.isArray(card?.itemCards) || Array.isArray(card?.categories)));
         });
         setSearchableData(extarctUniqueItems(filteredData));
      }
      fetchData();
   },[])
   const finalData=FoodName.length>=2? SearchableData.filter((item)=>item.name.toLowerCase().includes(FoodName.toLowerCase())) : [];
   console.log("SearchableData = ",SearchableData);
   return(
      <>
         <div className="flex justify-center items-center mt-20">
            <input type="text" placeholder="Search for dishes" className="bg-red-100 w-150 rounded-xl p-2" onChange={(e)=>setFoodName(e.target.value)}/>
         </div>
         <div className="w-[60%] mx-auto mt-10 flex flex-col items-center p-5">
            {
               finalData.map((item)=><MenuItemCard key={item.id} itemData={item} />)
            }
         </div>
      </>
   )
}