import RestaurantCard from "./ResturantCard";
import resList from "../utils/resList";
import { useState } from "react";

const Body = () => {
  const [listofResturents, setlistofResturents] = useState(resList);

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
