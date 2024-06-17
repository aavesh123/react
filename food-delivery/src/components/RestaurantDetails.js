import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantDetails = () => {

    const { resId } = useParams();

    const menuItemList = useRestaurantMenu(resId);

    return menuItemList.length == 0 ? (
        <div className="wrapper shimmer-restaurant-wrapper">
            <ShimmerCard />
        </div>
    ) : (
        <div>
            {
                menuItemList?.map(category => <section className="category" key={category?.card?.card?.title}>
                    <header><h2>{category?.card?.card?.title}</h2></header>
                    <section className="category-item-wrapper">
                        {category?.card?.card?.itemCards?.map(item =>
                            <div className="category-item" key={item?.card?.info?.id}>
                                <div className="category-item-type">{item?.card?.info?.isVeg === 1 ? <span className="veg"><span></span></span> : <span className="non-veg"><span></span></span>}</div>
                                <div className="category-item-name"><h3>{item?.card?.info?.name}</h3></div>
                                <div className="category-item-price"><h4>RS.{item?.card?.info?.price / 100}</h4></div>
                                <div className="category-item-rating"><h5>{item?.card?.info?.ratings?.aggregatedRating?.rating + '- (' + item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 + ')'}</h5></div>
                            </div>
                        )}
                    </section>
                </section>)
            }
        </div>
    )
}

export default RestaurantDetails;