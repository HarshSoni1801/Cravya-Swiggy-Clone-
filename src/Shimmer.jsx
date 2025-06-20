export default function Shimmer() {
   const shimmerCards = Array(15).fill(0); // create 15 placeholders
 
   return (
     <div className="flex flex-wrap justify-center gap-5 max-w-[80%] container mx-auto mt-10 animate-pulse">
       {shimmerCards.map((_, index) => (
         <div key={index} className="max-w-[273px]">
           <div className="w-[273px] h-[182px] bg-gray-300 rounded-xl"></div>
           <div className="w-[95%] mx-auto mt-2">
             <div className="w-full h-5 bg-gray-300 rounded"></div>
             <div className="w-full h-5 bg-gray-300 mt-2 rounded"></div>
             <div className="w-full h-5 bg-gray-300 mt-2 rounded"></div>
           </div>
         </div>
       ))}
     </div>
   );
 }
 