

const Shimmer=()=>{
    return (
        <div className="flex flex-wrap justify-center p-4 space-x-4">
        {Array.from({ length: 21 }).map((_, index) => (
          <div key={index} className="shimmer-card w-64 h-40 bg-gray-200 rounded-lg overflow-hidden shadow-md mb-4 relative">
            <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-lg"></div>
          </div>
        ))}
      </div>
      
    )
}

export default Shimmer;