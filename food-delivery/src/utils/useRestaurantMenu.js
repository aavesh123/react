import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [menuItemList, setMenuItemList] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        const transformApiData = transformData(json.data.cards);
        setMenuItemList(transformApiData);
    }
    const transformData = (cards) => {
        const result = {
            restaurantInfo: {},
            restaurantItem: []
        };
        cards.forEach(card => {
            if (card?.card?.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant') {
                result.restaurantInfo = card?.card?.card?.info
            }
            // if (card?.card?.card["@type"] === 'type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2') {
            //     result.restaurantInfo = card.card.card
            // }
            if (card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length) {
                const cardItems = card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => item.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory')
                cardItems.forEach(ele => {
                    result.restaurantItem.push(ele.card.card);
                })
            }
        })
        return result;
    }
    return menuItemList;

}

export default useRestaurantMenu;