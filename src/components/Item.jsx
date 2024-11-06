import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";


const Item=({item})=>{  
    const price = item.card.info.price || item.card.info.defaultPrice;
    const{loggedUser}=useContext(UserContext);
    return (
        <div key={item.card.info.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
          <div className="flex-1">
            <h4 className="text-lg font-medium text-gray-700">{item.card.info.name}</h4>
            {price && (
              <span className="text-gray-600 font-semibold">₹{price / 100}</span>
            )}
            <h5 className="text-gray-500 text-sm">
              ⭐ {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCount})
            </h5>
            <h5 className="text-gray-500 text-sm">
            {loggedUser}
            </h5>
            <h6 className="text-gray-500 text-sm">{item.card.info.description}</h6>
          </div>
          <div className="relative"> 
          
          {item.card.info.imageId ? (
            <img className="w-20 h-20 object-cover rounded-lg ml-4" src={`${CDN_URL}${item.card.info.imageId}`} alt={item.card.info.name} />
          ):<div className="w-20 h-20 object-cover rounded-lg ml-4"></div>}
          <button className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-full bg-black m-1 p-1 text-white w-16 rounded-lg">Add +</button>
          </div>
        </div>
      );

}
export default Item;