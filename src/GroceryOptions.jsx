import {GrocerGridCard} from './Grocery';
export default function GroceryOptions()
{
   return(
      <div className="w-[80%] mx-auto mt-10 Rubik">
         <h1 className='text-2xl'>Shop groceries on Instamart</h1>
         <div className='flex flex-nowrap overflow-x-auto gap-10 mt-5 container mx-auto text-center'>
         {
            GrocerGridCard.map((food)=>{
               return (
                  <div key={food.id}>
                     <a href={food?.action.link} target='_blank' >
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+food.imageId} className='min-w-[144px] w-[144px] h-[144px] object-cover flex-shrink-0 hover:cursor-pointer'></img>
                     </a>
                     <h2>{food?.action.text}</h2>
                  </div>
               )
            })
         }
         </div>
      </div>
   )

}