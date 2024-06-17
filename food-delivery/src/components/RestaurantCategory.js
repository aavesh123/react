import { useState } from "react";
import RestaurantItemCard from "./RestaurantItemCard";

const RestaurantCategory = ({ data }) => {
    const [showIndex, setShowIndex] = useState(0)
    return (
        <>
            <div className="rest-category">
                {data.title}
            </div>
            {data.categories.map((item, index) => (
                // controlled component 
                <RestaurantItemCard
                    key={item?.title}
                    itemCard={item}
                    showItem={index === showIndex && true}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </>
    )
}

export default RestaurantCategory;