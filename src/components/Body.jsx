import RestaurantCard from "./ResturantCard";
import resList from "../utils/resList";
import { useState , useEffect} from "react";

const Body = () => {
  const [listofResturents, setlistofResturents] = useState(resList);

  useEffect(() => {
    fetchData();
  } , []);

  const fetchData = async () => {
    const data = await fetch ('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    console.log(json);
    setlistofResturents(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }


  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofResturents.filter(
              (res) => res.data.avgRating >= 4
            );
            setlistofResturents(filteredList);
          }}
        >
          Filter the restaurants
        </button>
      </div>

      <div className="res-container">
        {listofResturents.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} resData={restaurant} />   
        ))}
      </div>
    </div>
  );
};

export default Body;
