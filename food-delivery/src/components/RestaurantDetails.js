import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerCard from "./ShimmerCard"
const RestaurantDetails = () => {
    const [menuItemList, setMenuItemList] = useState([]);
    const [restaurantDetailList, setRestaurantDetailList] = useState([]);
    const { resId } = useParams();
    console.log(menuItemList);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=' + resId + '&catalog_qa=undefined&submitAction=ENTER');
        const json = await data.json();
        console.log(json);
        setRestaurantDetailList(json.data.cards)
        // working fine
        const filterCardData = json.data.cards.filter(ele => ele?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length)[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
        const menuItem = filterCardData.filter(ele => ele.card.card.itemCards) ?? [];
        setMenuItemList(menuItem)
        // if (filterData.length) {
        // }
    }
    return menuItemList.length == 0 ? (
        <div className="wrapper shimmer-restaurant-wrapper">
            <ShimmerCard />
        </div>
    ) : (
        <>
            {/* <div>
                {restaurantDetailList.map(restCard => <section className="rest-card">
                    {() => {
                        const card = restCard?.card?.card
                        if (card?.text) {
                            return <h2>{card?.card?.text}</h2>
                        }
                        // if (card.tabs.length) {
                        //     return { card.tabs.map(tab => <div className="card-tab">{tab.title}</div>) }
                        // }
                    }}
                </section>)}
            </div> */}
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
        </>
    )
}

export default RestaurantDetails;


// to get restro details
// POP_UP_CROUTON_MENU

// offer
// offerCollectionWidget_UX4
// "id": "offerCollectionWidget_UX4",

// for corousel
// "title": "Top Picks",
// {
//     "card": {
//         "card": {
//             "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
//             "title": "Top Picks",


// "card": {
//     "card": {
//         "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
//             "title": "Recommended",
//                 "itemCards":