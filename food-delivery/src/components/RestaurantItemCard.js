import { useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantItemCard = ({ itemCard, showItem, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div className="rest-category-wrapper">
            <div className="rest-category-item" onClick={handleClick}><span>{itemCard.title} ({itemCard?.itemCards?.length})</span> <span>{'🔽'}</span></div>
            {showItem && itemCard?.itemCards.map(item => <RestaurantItem key={item?.title + '1'} item={item?.card?.info} />)}
        </div>
    )
}
export default RestaurantItemCard;