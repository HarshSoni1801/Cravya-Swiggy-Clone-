export default function DineCard({data})
{
   return(
      <a href={data?.cta?.link} target="_blank" className="hover:cursor-pointer">
         <div className="min-w-[328px]">
            <div className="relative">
               <img className="w-[326px] h-[189px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+data?.info?.mediaFiles[0]?.url} alt="" />
               <div className="bg-gradient-to-t from-black absolute bottom-0 w-full h-[30%]"></div>
               <p className="absolute bottom-4 left-4 text-white font-bold text-1xl">{data?.info?.name}</p>
               <p className="absolute bottom-4 right-4 text-white font-bold text-1xl">{data?.info?.rating?.value}</p>
            </div>
         </div>
      </a>
   )
}