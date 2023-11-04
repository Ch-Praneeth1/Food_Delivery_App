import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    const [btnValue ,setbtnValue] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt=""></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/About"}>About Us</Link>
                    </li>
                    <li>
                        <Link to={"/Contact"}>Contact Us</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                    <button className='loginButton' onClick={ () =>{
                        btnValue === "Login"?setbtnValue("Logout"):setbtnValue("Login")
                    }}>{btnValue}</button>
                </ul>
            </div>
        </div>
    )
};



export default Header;