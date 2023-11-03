import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () =>{
    const [btnValue ,setbtnValue] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt=""></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>contact Us</li>
                    <li>Cart</li>
                    <button className='loginButton' onClick={ () =>{
                        btnValue === "Login"?setbtnValue("Logout"):setbtnValue("Login")
                    }}>{btnValue}</button>
                </ul>
            </div>
        </div>
    )
};



export default Header;