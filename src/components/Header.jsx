
import { LOGO_URL } from "../utils/constant"

const Header =()=>{

    const[btnlogin,setBtnlogin]=React.useState("Login")
    return(
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL}></img>
        </div>
        <div className="nav-bar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="loginbtn" onClick={()=>{btnlogin==="Login"?setBtnlogin("LogOut"):setBtnlogin("Login")}}>{btnlogin}</button>
            </ul>

        </div>

    </div>
    )
}
export default Header;