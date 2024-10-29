import ResObj from "../utils/SampleData";
import ResCard from "./ResCard";
import {useState} from "react"

const Body=()=>{
    // console.log(ResObj[0].info);
    console.log(ResObj)
    // const [resList,setResList] =useState([])
    const [resList,setResList]=React.useState(ResObj)
    return(
        <div className="appbody">
            <div className="filter">
                <button className="res-filter-btn" onClick={()=>{setResList(resList.filter((res)=>res.info.avgRating>=4.5))}}>Top Rated Restaurants</button>
            </div>
            <div  className="res-container">
                {resList.map((redinfo)=> <ResCard key={redinfo.info.id}   resData={redinfo.info}/>)}
            </div>
        </div>
    )
}

export default Body;