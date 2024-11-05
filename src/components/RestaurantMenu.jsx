
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    const {resInfo,resMenu,menuSections}    =useRestaurantMenu();

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
  {menuSections && menuSections.map((section, index) => (
    section.card.card.itemCards ? (
      <div key={index} className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.card.card.title}</h2>
        {section.card.card.itemCards.map((item, idx) => {
          const price = item.card.info.price || item.card.info.defaultPrice;
          return (
            <div key={idx} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-700">{item.card.info.name}</h4>
                {price && (
                  <span className="text-gray-600 font-semibold">₹{price / 100}</span>
                )}
                <h5 className="text-gray-500 text-sm">
                  ⭐ {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCount})
                </h5>
                <h6 className="text-gray-500 text-sm">{item.card.info.description}</h6>
              </div>
              {item.card.info.imageId && (
                <img className="w-20 h-20 object-cover rounded-lg ml-4" src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card.info.name} />
              )}
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
