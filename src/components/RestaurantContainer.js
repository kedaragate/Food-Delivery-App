import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

import { RESTAURANT_DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckRestaurantData from "../utils/useCheckRestaurantData";
import { useFilterRestaurantsByRating, useSearchFilter } from "../utils/filter";

const RestaurantContainer = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANT_DATA_URL);
    const result = await data.json();

    setListOfRes(useCheckRestaurantData(result));
    setFilteredListOfRes(useCheckRestaurantData(result));
  };

  const handleSearch = (text, listOfRes) => {
    setSearchText(text);

    setFilteredListOfRes(useSearchFilter(text, listOfRes));
  };

  return (
    <div className="container">
      <div className="filter-div">
        <input
          type="text"
          className="search-text"
          placeholder="Search your favourite food"
          value={searchText}
          onChange={(e) => {
            return handleSearch(e.target.value, listOfRes);
          }}
        ></input>
        <button
          className="filter-top-rated-btn btn-primary"
          onClick={() =>
            setFilteredListOfRes(useFilterRestaurantsByRating(4, listOfRes))
          }
        >
          Top Restaurants
        </button>
      </div>
      <section className="restaurant-container">
        {filteredListOfRes.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          filteredListOfRes.map((res) => {
            return (
              <Link
                to={"/restaurants/" + res.info.id}
                style={{ textDecoration: "none" }}
                key={res.info.id}
              >
                <RestaurantCard resData={res.info} />
              </Link>
            );
          })
        )}
      </section>
    </div>
  );
};

export default RestaurantContainer;
