export default function FoodCard({foodData})
{
   return(
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageID} alt="" />
   )
}