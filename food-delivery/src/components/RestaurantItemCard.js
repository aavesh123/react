import { useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantItemCard = ({ itemCard, showItem, setShowIndex }) => {
    // const [showItem, setShowItem] = useState(false);
    // // console.log(itemCard);
    const handleClick = () => {
        // setShowItem(!showItem)
        setShowIndex();
    }
    return (
        <div className="rest-category-wrapper">
            <div className="rest-category-item" onClick={handleClick}><span>{itemCard.title} ({itemCard?.itemCards?.length})</span> <span>{'🔽'}</span></div>
            {showItem && itemCard?.itemCards.map(item => <RestaurantItem key={item?.title} item={item?.card?.info} />)}
        </div>
    )
}
export default RestaurantItemCard;