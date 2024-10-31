import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {
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

    if (!resMenu) return <Shimmer />;

    return (
        <div className="res-menu-container">
            <div className="menu-res-details">
                <h3>{resInfo?.name}</h3>
                <h3>{resInfo?.cuisines.join(", ")}</h3>
                <h4>⭐ {resInfo?.avgRatingString}</h4>
                <h4>Cost For Two: {resInfo?.costForTwoMessage}</h4>
            </div>

            {menuSections && menuSections.map((section, index) => (
                section.card.card.itemCards ? (
                    <div key={index} className="res-menu-card">
                        <h2>{section.card.card.title}</h2>
                        {section.card.card.itemCards.map((item, idx) => {
                            const price = item.card.info.price || item.card.info.defaultPrice;
                            return (
                                <div key={idx} className="item-container">
                                    <div>
                                    <h4 className="item-name">{item.card.info.name}</h4>
                                    {price && (
                                        <span className="item-price">₹{price / 100}</span>
                                    )}
                                    <h5 className="rating-section-item">⭐{item.card.info.ratings.aggregatedRating.rating +"("+item.card.info.ratings.aggregatedRating.ratingCount +")" }</h5>
                                    <h6 className="item-section-description">{item.card.info.description}</h6>
                                    </div>
                                    
                                    {item.card.info.imageId && (<img className="imge-item-menu" src={CDN_URL+item.card.info.imageId}/>)}
                                    
                                </div>
                            );
                        })}
                    </div>
                ) : null
            ))}
        </div>
    );
};

export default RestaurantMenu;
