import { Link } from "react-router"
export default function Header()
{
   return(
      <header className="bg-[#FFD54F] Rubik">
         <div className="container mx-auto py-3 px-6 flex flex-col md:flex-row items-center justify-between">
            <img className="w-30" src="/Logo.png" alt="Cravya Logo" />
            <div className="Roboto flex items-center text-base gap-10">
               <a href="https://www.swiggy.com/corporate/" target="_blank">Cravya Corporate</a>
               <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Cravya Corporate</a>
               <a href="" target="_blank">Partner with us</a>
               <a href="" className="border-3 border-white py-2 px-4 rounded-3xl" target="_blank">Get the App</a>
               <a href="" className="border border-black bg-black py-2 px-4 rounded-2xl text-white" target="_blank">Sign in</a>
            </div>
         </div>
         <div className="pt-16 pb-32 relative">
            <img className="h-150 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
            <img className="h-150 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
            <div className="text-5xl font-bold max-w-[60%] container mx-auto text-center py-">Order Food and Groceries. Discover best restaurants. Cravya It!</div>
            <div className="max-w-[70%] container mx-auto flex gap-5 mt-7 justify-center">
               <input className="bg-white w-[20%] px-6 py-3 rounded-2xl" type="text" placeholder="Kolkata, India"></input>
               <input className="bg-white w-[35%] px-6 py-3 rounded-2xl" type="text" placeholder="Search for retaurant and items for more"></input>
            </div>
         </div>
         <div className="flex max-w-[60%] container mx-auto gap-5 justify-between">
               <Link to="/restaurant">
                    <img className="transform transition-transform duration-300 hover:scale-110" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1" target="_blank">
                    <img className="transform transition-transform duration-300 hover:scale-110" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout" target="_blank">
                    <img className="transform transition-transform duration-300 hover:scale-110" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
         </div>
      </header>
   )
}