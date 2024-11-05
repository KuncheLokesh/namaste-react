import { LOGO_URL } from "../utils/constant"
import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header =()=>{
    const[btnlogin,setBtnlogin]=useState("Login");
    const onlineStatus=useOnlineStatus();

    return(
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL}></img>
        </div>
        <div className="nav-bar">
            <ul>
                <li>Online Status {onlineStatus?"✅":"🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <button className="loginbtn" onClick={()=>{btnlogin==="Login"?setBtnlogin("LogOut"):setBtnlogin("Login")}}>{btnlogin}</button>
            </ul>

        </div>

    </div>
    )
}
export default Header;