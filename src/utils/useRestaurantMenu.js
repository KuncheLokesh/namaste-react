import RestaurantMenu from "../components/RestaurantMenu";
import { MENU_URL } from "./constant";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const useRestaurantMenu=()=>{
    const { resId } = useParams();
    const [resMenu, setResMenu] = useState(null);
    const [menuSections, setMenuSections] = useState(null);
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const rawMenuData = await fetch(MENU_URL+resId);
        const menuData = await rawMenuData.json();
        setResMenu(menuData?.data);
        setResInfo(menuData?.data?.cards[2]?.card?.card?.info);
        setMenuSections(menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log(menuSections)
    };

    return {resMenu,resInfo,menuSections};


}

export default useRestaurantMenu;