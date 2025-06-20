export default function Shimmer() {
   return (
     <div className="w-[60%] mx-auto mt-10 flex flex-col items-center p-5 animate-pulse">
       {/* Top filters and search */}
       <div className="w-full flex mb-5 gap-20 relative">
         <div className="flex gap-5">
           <button className="text-l font-bold rounded-xl px-3 py-1 border-[2px]">Veg</button>
           <button className="text-l font-bold rounded-xl px-3 py-1 border-[2px]">Non Veg</button>
         </div>
         <input type="text" placeholder="Search for dishes" className="bg-red-100 w-150 rounded-xl p-2" />
       </div>
 
       {/* Repeated shimmer cards */}
       {[1, 2, 3].map((_, index) => (
         <div key={index} className="w-full">
           <div className="flex mt-5 mb-5 justify-between w-full">
             <div className="w-[70%] pr-20">
               <div className="w-[30%] h-8 mb-5 bg-gray-300 rounded"></div>
               <div className="w-[10%] h-3 mb-5 bg-gray-300 rounded"></div>
               <div className="w-[10%] h-2 mb-5 bg-gray-300 rounded"></div>
               <div className="w-full h-11 mb-5 bg-gray-300 rounded"></div>
             </div>
             <div className="w-[20%] h-36 bg-gray-300 rounded"></div>
           </div>
           <hr className="m-10 w-[70%] mx-auto border border-gray-300" />
         </div>
       ))}
     </div>
   );
 }
 