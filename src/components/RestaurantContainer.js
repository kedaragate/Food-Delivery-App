import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";

import { RESTAURANT_DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";

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

    console.log(result);
    const correctCardObjectOfRestaurants = function () {
      return result?.data?.cards.filter((res) => {
        if (res.hasOwnProperty("card")) {
          if (res.card.hasOwnProperty("card")) {
            if (res.card.card.hasOwnProperty("gridElements")) {
              if (res.card.card.gridElements.hasOwnProperty("infoWithStyle")) {
                if (
                  res.card.card.gridElements.infoWithStyle.hasOwnProperty(
                    "restaurants"
                  )
                ) {
                  return true;
                }
              }
            }
          }
        }
      });
    };
    console.log(correctCardObjectOfRestaurants()[0]);
    const finalResult =
      correctCardObjectOfRestaurants()[0]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants;
    console.log(finalResult);
    setListOfRes(finalResult);
    setFilteredListOfRes(finalResult);
  };

  function filterTopRatedRestaurants() {
    let filteredData = listOfRes.filter((res) => {
      return res.info.avgRating > 4;
    });
    setFilteredListOfRes(filteredData);
  }

  function filterBasedOnSearch(text) {
    setSearchText(text);
    const filteredResult = listOfRes.filter((res) => {
      return res.info.name.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredListOfRes(filteredResult);
  }

  return (
    <div className="container">
      <div className="filter-div">
        <input
          type="text"
          className="search-text"
          placeholder="Search your favourite food"
          value={searchText}
          onChange={(e) => {
            return filterBasedOnSearch(e.target.value);
          }}
        ></input>
        <button
          className="filter-top-rated-btn btn-primary"
          onClick={() => filterTopRatedRestaurants()}
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
