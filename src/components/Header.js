import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header = () =>{
    const [btnValue ,setbtnValue] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {userLogedIn} = useContext(UserContext);
    // console.log(userLogedIn);

    const cartItems = useSelector((store) =>store.cart.items)
    // console.log(cartItems)

    return (
        <div className="flex justify-between bg-white items-center shadow-lg ">
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
                    <li className='mx-6 font-bold' >
                    <Link to={"/Cart"}>Cart ({cartItems.length} Item)</Link>
                    </li>
                    <button className='loginButton' onClick={ () =>{
                        btnValue === "Login"?setbtnValue("Logout"):setbtnValue("Login")
                    }}>{btnValue}</button>
                    <li className='mx-6 font-bold'>
                        {userLogedIn}
                    </li>                    
                </ul>
            </div>
        </div>
    )
};



export default Header;