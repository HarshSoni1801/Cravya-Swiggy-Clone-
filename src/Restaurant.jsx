import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching restaurant data...");
      const proxyServer = "https://cors-anywhere.herokuapp.com/"
      const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true";

      try {
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();

        // Find the card that has the restaurant list
        const cardWithRestaurants = data?.data?.cards.find((card) =>card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        const tempData =cardWithRestaurants?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        console.log("Fetched restaurant data:", tempData);
        setRestData(tempData);
      } catch (err) {
        console.error("Failed to fetch Swiggy data:", err);
      }
    }
    fetchData();
  }, []);

  if (!RestData || RestData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 max-w-[80%] container mx-auto mt-10">
      {RestData.map((each) => (
        <RestCard key={each.info.id} restInfo={each} />
      ))}
    </div>
  );
}
