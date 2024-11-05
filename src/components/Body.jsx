import ResObj from "../utils/SampleData";
import ResCard from "./ResCard";
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    // console.log(ResObj[0].info);
    // console.log(ResObj)
    // const [resList,setResList] =useState([])
    const [resList,setResList]=useState([])
    const [resshowlist,setResshowlist]=useState([]);
    const [searchtext,setSearchText]=useState("");
    useEffect(()=>{
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
        <div className="max-w-5xl mx-auto my-5 p-5 font-sans text-gray-800">
        {/* Search Bar */}
        <div className="flex justify-center items-center gap-4 my-5 p-4 bg-gray-100 rounded-md shadow-lg transition duration-300 hover:shadow-xl">
          <input
            className="p-3 text-lg w-72 border-2 border-gray-300 rounded-md focus:outline-none focus:border-orange-500 transition duration-300 placeholder-gray-500"
            type="text"
            placeholder="Search for restaurants..."
            value={searchtext}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? filterRestaurants() : '')}
          />
          <button
            className="px-6 py-3 text-lg text-white bg-green-600 rounded-md shadow-md transition duration-300 transform hover:bg-green-500 hover:-translate-y-1 active:translate-y-0.5"
            onClick={filterRestaurants}
          >
            Search
          </button>
          <button
            className="px-6 py-3 text-lg text-white bg-orange-600 rounded-md shadow-md transition duration-300 transform hover:bg-orange-500 hover:-translate-y-1 active:translate-y-0.5"
            onClick={() => setResList(resList.filter((res) => res.info.avgRating >= 4.5))}
          >
            Top Rated
          </button>
        </div>
      
        {/* Restaurant List */}
        <div className="flex flex-wrap gap-6 justify-center">
          {resshowlist.map((redinfo) => (
            <Link key={redinfo.info.id} to={`/restaurant/${redinfo.info.id}`} className="transform transition duration-300 hover:scale-105">
              <ResCard resData={redinfo.info} />
            </Link>
          ))}
        </div>
      </div>
      

    )
}

export default Body;