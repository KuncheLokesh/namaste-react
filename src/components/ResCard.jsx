import { CDN_URL } from "../utils/constant"


const ResCard=(props)=>{

    return (
    <div className="res-card">
        <img alt="rescard" className="res-img" src={CDN_URL+props.resData.cloudinaryImageId}></img>
        <h3>{props.resData.name}</h3>
        <h4>{props.resData.cuisines.join(", ")}</h4>
        <h4>⭐{
            props.resData.avgRating
}</h4>
        <h4>{props.resData.costForTwo}</h4>

    </div>)
}

export default ResCard;