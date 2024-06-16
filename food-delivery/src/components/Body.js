import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard"

export const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');
    console.log(listOfRestaurant);
    useEffect(() => {
        fetchData()
    }, []);
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        console.log(json);
        json?.data?.cards?.forEach(ele => {
            if (ele?.card?.card?.id === 'top_brands_for_you') {
                const restaurantList = ele.card.card?.gridElements?.infoWithStyle?.restaurants ?? [];
                setFilteredRestaurant(restaurantList);
                setListOfRestaurant(restaurantList);
                return
            }
        })
    }

    // conditional rendering
    // if (listOfRestaurant.length === 0) {
    //     return <>
    //         <div className="wrapper shimmer-restaurant-wrapper">
    //             <ShimmerCard />
    //         </div>
    //     </>
    // }

    return listOfRestaurant.length === 0 ? (
        <div className="wrapper shimmer-restaurant-wrapper">
            <ShimmerCard />
        </div>
    ) : (
        <div className="wrapper content-wrapper">
            {/* <Banner /> */}
            <div className="wrapper search-wrapper">
                {/* search by name button click */}
                <div className="search">
                    <input type="text" name="searchText" onChange={(value) => {
                        setSearchText(value.target.value);
                    }} />'
                    <button className="filter-btn" onClick={(res) => {
                        const data = JSON.parse(JSON.stringify(listOfRestaurant));
                        console.log('before filter', data);
                        const filterList = data.filter((res) => res.info.name.includes(searchText))
                        setFilteredRestaurant(filterList);
                    }}>Search</button>
                </div>
                {/* search by rating button click */}
                <button className="filter-btn" onClick={() => {
                    const data = JSON.parse(JSON.stringify(listOfRestaurant));
                    const filterList = data.filter((res) => res.info.avgRating >= 4.5)
                    setFilteredRestaurant(filterList);
                }}>Top Restaurant</button>

            </div>
            <div className="wrapper restaurant-wrapper">
                {
                    filteredRestaurant.map((restaurant => <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;