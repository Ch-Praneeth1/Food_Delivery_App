import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () =>{
    const [btnValue ,setbtnValue] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex bg-blue-300 items-center ">
            <div className="w-24 my-2 mx-4">
                <img src={LOGO_URL} alt=""></img>
            </div>
            <div >
                <ul className="flex">
                    <li className='mx-6'>
                        onlineStatus:{onlineStatus? "🟢":"🔴"}
                    </li>
                    <li className='mx-6'>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className='mx-6'>
                        <Link to={"/About"}>About Us</Link>
                    </li>
                    <li className='mx-6'>
                        <Link to={"/Contact"}>Contact Us</Link>
                    </li>
                    <li className='mx-6'>
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