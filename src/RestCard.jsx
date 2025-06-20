import { Link } from "react-router"

export default function RestCard({ restInfo }){
   return(
      <Link to={`/city/kolkata/${restInfo?.info.id}`}>
         <div className="Rubik max-w-[273px] hover:scale-[.95] p-1 transition-transform duration-200 ease-in-out bg-white rounded-xl shadow-lg cursor-pointer">
            <img className="w-[273px] h-[182px] object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+restInfo?.info.cloudinaryImageId} alt="" />
            <div className="w-[90%] mx-auto mt-2">
               <p className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">{restInfo?.info.name}</p>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] inline-block mr-[5px]">
                     <polygon points="12 2 15 8 22 8 17 12 19 18 12 14 5 18 7 12 2 8 9 8" fill="#28A745"/>
                  </svg>
               </span>
               <span>{restInfo?.info.avgRating}  •  {restInfo?.info.sla.slaString}</span>
               <p className="w-[100%] whitespace-nowrap overflow-hidden text-ellipsis text-gray-600">{restInfo?.info.cuisines.join(" ")}</p>
               <p className=" text-gray-600">{restInfo?.info.areaName}</p>
            </div>
         </div>      
      </Link>
   )
}