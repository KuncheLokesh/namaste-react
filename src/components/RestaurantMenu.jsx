
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Item from "./Item";
import MenuSection from "./Menusection";

const RestaurantMenu = () => {
    const {resInfo,resMenu,menuSections}=useRestaurantMenu();
   
    if (!resMenu) return <Shimmer />;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
  {/* Restaurant Details */}
  <div className="text-center mb-8">
    <h3 className="text-3xl font-semibold text-gray-800">{resInfo?.name}</h3>
    <h4 className="text-xl text-gray-600">{resInfo?.cuisines.join(", ")}</h4>
    <div className="flex justify-center items-center mt-2">
      <span className="text-yellow-500 text-lg">⭐ {resInfo?.avgRatingString}</span>
      <span className="text-gray-500 text-sm ml-2">Cost For Two: {resInfo?.costForTwoMessage}</span>
    </div>
  </div>

  {/* Menu Sections */}
  {menuSections  &&menuSections.map((section, index) => (
    (
      <MenuSection section={section}/>
    ) 
  ))}
</div>

      
    );
};

export default RestaurantMenu;
