import { useState } from "react";
import Item from "./Item";



const MenuSection=({section,showSection,setshowSection})=>{
    // const [showSection,setShowSection]=useState(false);
    function handleClick(){
        setshowSection();
    }

    return (<div className="mb-8">
        <div className="flex justify-between bg-gray-200 cursor-pointer" onClick={handleClick}>
         <h2 className=" m-2 p-2 text-xl font-semibold text-gray-800 mb-4">{section.card.card.title}</h2>
        <h2 className="m-2 p-2 text-xl">▼</h2>
        </div>
        
        { showSection&& section.card.card.itemCards.map((item, idx) => {
          return (<Item  key={idx} item={item}/>);
        })}
      </div>)
}
export default MenuSection;