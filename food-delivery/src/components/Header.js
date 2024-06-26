import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="wrapper navbar-wrapper">
            <h2> Food Order </h2>
            <nav className="navbar-item">
                <ul>
                    <li>Online Status: {onlineStatus ? '✅' : '🔴'}</ li>
                    <li className="active" ><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li className="dark" onClick={() => {
                        const name = btnName === 'Login' ? 'Logout' : 'Login'
                        setBtnName(name);
                    }}>{btnName}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;