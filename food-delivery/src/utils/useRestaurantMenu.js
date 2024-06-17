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
        const filterCardData = json.data.cards.filter(ele => ele?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length)[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];
        const menuItem = filterCardData.filter(ele => ele.card.card.itemCards) ?? [];
        setMenuItemList(menuItem)
    }
    return menuItemList;

}

export default useRestaurantMenu;