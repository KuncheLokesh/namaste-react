import ResObj from "../utils/SampleData";
import ResCard from "./ResCard";
// import {useState} from "react"
import Shimmer from "./Shimmer";

const Body=()=>{
    // console.log(ResObj[0].info);
    // console.log(ResObj)
    // const [resList,setResList] =useState([])
    const [resList,setResList]=React.useState([])
    const [resshowlist,setResshowlist]=React.useState([]);
    const [searchtext,setSearchText]=React.useState("");
    React.useEffect(()=>{
        fetchData()
       
    },[])

    const fetchData=async ()=>{
         const resData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4425987&lng=79.98645599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const resdetail= await resData.json();
        setResList(resdetail?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResshowlist(resdetail?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    function filterRestaurants(){
        let filterdata=resList.filter((resData)=>resData.info.name.toLowerCase().includes(searchtext.toLowerCase()))
        // console.log(filterdata)
        setResshowlist(filterdata);
    }

    if(resList.length==0){
        return <Shimmer />
    }
    return(
        <div className="appbody">
            <div className="filter">
                <input  className="searchinput" type="text" value={searchtext} onChange={(e)=>{setSearchText(e.target.value)}} onKeyDown={(e)=>{e.key==='Enter'?filterRestaurants():""}}></input>
                <button className="search-btn" onClick={filterRestaurants}>Search</button>
                <button className="res-filter-btn" onClick={()=>{setResList(resList.filter((res)=>res.info.avgRating>=4.5))}}>Top Rated Restaurants</button>
            </div>
            <div  className="res-container">
                {resshowlist.map((redinfo)=> <ResCard key={redinfo.info.id}   resData={redinfo.info}/>)}
            </div>
        </div>
    )
}

export default Body;