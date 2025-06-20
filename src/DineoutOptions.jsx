import {res} from "./RestaurantData"
import DineCard from "./DineCard";
export default function DineoutOptions()
{
   return(
      <div className="w-[80%] mx-auto mt-20 Rubik">
         <p className="text-2xl">Discover best restaurants on Dineout</p>
         <div className='flex flex-nowrap overflow-x-auto gap-10 mt-5 container mx-auto text-center'>
                  {
                     res.map((place)=><DineCard key={place?.info.id} data={place}></DineCard>)
                  }
                  </div>
      </div>
   )
}