import { CDN_URL } from "../utils/constant"


const ResCard=(props)=>{

    return (
        <div className="w-64 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <img
          alt="rescard"
          className="w-full h-36 object-cover"
          src={CDN_URL + props.resData.cloudinaryImageId}
        />
        <h3 className="text-xl font-semibold text-gray-800 m-3">{props.resData.name}</h3>
        <h4 className="text-sm text-gray-600 mx-3 mb-1">{props.resData.cuisines.join(", ")}</h4>
        <h4 className="text-sm text-yellow-500 mx-3 mb-1">⭐ {props.resData.avgRating}</h4>
        <h4 className="text-sm text-gray-600 mx-3 mb-3">{props.resData.costForTwo}</h4>
      </div>
      )
}

export default ResCard;