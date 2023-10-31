import { LOGO_URL } from '../utils/constants';

const Header = () =>{
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
                </ul>
            </div>
        </div>
    )
};



export default Header;