// import ResCard from "./ResCard";

const TopRestaurant=(ResCard)=>{
    return (props)=>{
        return (
            <div >
            <label className="bg-black text-white text-sm font-semibold px-3 py-1 rounded-lg absolute z-10 shadow-md">
                Top Rated
            </label>
            <ResCard {...props} />
        </div>
        


        

        

        )
    }

}

export default TopRestaurant;