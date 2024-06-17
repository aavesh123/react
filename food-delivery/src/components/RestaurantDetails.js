import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItem from "./RestaurantItem";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {

    const { resId } = useParams();

    const { restaurantInfo, restaurantItem } = useRestaurantMenu(resId);

    return !restaurantItem ? (
        <div className="wrapper shimmer-restaurant-wrapper">
            <ShimmerCard />
        </div>
    ) : (
        <div className="text-center">
            <h1 className="font-bold">{restaurantInfo?.name}</h1>
            <h2>{'⭐'}{restaurantInfo?.avgRating} ({restaurantInfo?.totalRatingsString}) {restaurantInfo?.costForTwoMessage}</h2>
            <h2>{restaurantInfo?.cuisines.join(', ')}</h2>

            {restaurantItem.map((category => (<RestaurantCategory key={category?.title} data={category} />)))}

        </div>
    )
}

export default RestaurantDetails;


// <div>
//     {
//         menuItemList?.map(category =>
//             <section className="category" key={category?.card?.card?.title}>
//                 <header><h2>{category?.card?.card?.title}</h2></header>
//                 <RestaurantItem items={category?.card?.card?.itemCards} />
//             </section>)
//     }
// </div>