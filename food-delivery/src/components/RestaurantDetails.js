import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItem from "./RestaurantItem";

const RestaurantDetails = () => {

    const { resId } = useParams();

    const menuItemList = useRestaurantMenu(resId);

    return menuItemList.length == 0 ? (
        <div className="wrapper shimmer-restaurant-wrapper">
            <ShimmerCard />
        </div>
    ) : (
        // <div>
        //     {
        //         menuItemList?.map(category =>
        //             <section className="category" key={category?.card?.card?.title}>
        //                 <header><h2>{category?.card?.card?.title}</h2></header>
        //                 <RestaurantItem items={category?.card?.card?.itemCards} />
        //             </section>)
        //     }
        // </div>
        <div className="m-4">

        </div>
    )
}

export default RestaurantDetails;