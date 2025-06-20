import MenuItemCard from "./MenuItemCard";
import { useState } from "react";
export default function MenuCard({menuItems,selected}){

   const [IsOpen,setIsOpen]=useState(true);
   if("categories" in menuItems && Array.isArray(menuItems.categories)){
      return(
         <div className="w-full flex flex-col">
         <p className="font-extrabold text-2xl">{menuItems.title}</p>
         <div className="w-full flex flex-col items-center">
            {
               menuItems?.categories?.map((item)=><MenuCard key={item?.title} menuItems={item} selected={selected}></MenuCard>)
            }
         </div>
      </div>
      )
   }
   if(!IsOpen){
      return(
         <div className="w-full ">
            <div className="flex justify-between items-center">
               <p className="font-bold text-2xl w-full hover:cursor-pointer"  onClick={() => setIsOpen(true)}>{menuItems.title}</p>
               <button className="text-xl">▼</button>
            </div>
            <div className="h-3 bg-gray-200 mt-3 mb-3"></div>
         </div>
      )
   }
   if(selected==="veg")
   {
      return(
         <div className="w-full ">
            <div className="flex justify-between items-center">
               <p className="font-bold text-2xl w-full hover:cursor-pointer" onClick={() => setIsOpen(false)}>{menuItems.title}</p>
               <button  className="text-xl">▲</button>
            </div>
            <div>
               {
                  menuItems?.itemCards?.filter((item)=>"isVeg" in item?.card?.info ).map((item)=><MenuItemCard key={item?.card?.info?.id} itemData={item.card.info}></MenuItemCard>)
               }
            </div>
         </div>
      )
   }
   else if(selected==="nonveg")
   {
      return(
         <div className="w-full ">
            <div className="flex justify-between items-center">
               <p className="font-bold text-2xl w-full hover:cursor-pointer" onClick={() => setIsOpen(false)}>{menuItems.title}</p>
               <button  className="text-xl">▲</button>
            </div>
            <div>
               {
                  menuItems?.itemCards?.filter((item)=>!("isVeg" in item?.card?.info )).map((item)=><MenuItemCard key={item?.card?.info?.id} itemData={item.card.info}></MenuItemCard>)
               }
            </div>
         </div>
      )
   }

   if(IsOpen)
   {
      return(
         <div className="w-full ">
            <div className="flex justify-between items-center">
               <p className="font-bold text-2xl w-full hover:cursor-pointer" onClick={() => setIsOpen(false)}>{menuItems.title}</p>
               <button  className="text-xl">▲</button>
            </div>
            <div>
               {
                  menuItems?.itemCards?.map((item)=><MenuItemCard key={item?.card?.info?.id} itemData={item.card.info}></MenuItemCard>)
               }
            </div>
         </div>
      )
   }
   
}