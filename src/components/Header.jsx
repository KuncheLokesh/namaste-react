import { LOGO_URL } from "../utils/constant"
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header =()=>{
    const[btnlogin,setBtnlogin]=useState("Login");
    const onlineStatus=useOnlineStatus();

    return(
        <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="logo">
          <img src={LOGO_URL} className="w-15 h-12 rounded-md" alt="logo" />
        </div>
        <div className="nav-bar">
          <ul className="flex items-center gap-5 m-0 p-0 list-none">
            <li className="font-bold cursor-pointer">Online Status {onlineStatus ? "✅" : "🔴"}</li>
            <li className="font-bold cursor-pointer transition-colors duration-300">
              <Link to="/" className="text-white px-3 py-2 rounded hover:text-orange-500 hover:bg-orange-100">Home</Link>
            </li>
            <li className="font-bold cursor-pointer transition-colors duration-300">
              <Link to="/about" className="text-white px-3 py-2 rounded hover:text-orange-500 hover:bg-orange-100">About Us</Link>
            </li>
            <li className="font-bold cursor-pointer transition-colors duration-300">
              <Link to="/contact" className="text-white px-3 py-2 rounded hover:text-orange-500 hover:bg-orange-100">Contact Us</Link>
            </li>
            <li className="font-bold cursor-pointer transition-colors duration-300">
              <Link to="/grocery" className="text-white px-3 py-2 rounded hover:text-orange-500 hover:bg-orange-100">Grocery</Link>
            </li>
            <li className="font-bold cursor-pointer">Cart</li>
            <button
              className="ml-5 px-4 py-2 text-lg font-bold text-white bg-orange-500 rounded cursor-pointer transition-all duration-300 hover:bg-orange-400 hover:-translate-y-0.5 active:translate-y-0.5"
              onClick={() => setBtnlogin(btnlogin === "Login" ? "LogOut" : "Login")}
            >
              {btnlogin}
            </button>
          </ul>
        </div>
      </div>
      
    )
}
export default Header;