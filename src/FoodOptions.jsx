import {imageGridCards} from './FoodData';
export default function FoodOptions()
{
   return(
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-wrap justify-start gap-4 mt-10">
         {
            imageGridCards.map((food)=>{
               return (
               <a href={food?.action.link} target='_blank' key={food.id}>
                  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+food.imageId} className='w-24 md:w-[144px] hover:cursor-pointer'></img>
               </a>
               )
            })
         }
      </div>
   )

}