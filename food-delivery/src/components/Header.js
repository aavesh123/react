import { useState } from "react";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    return (
        <div className="wrapper navbar-wrapper">
            <h2> Food Order </h2>
            <nav className="navbar-item">
                <ul>
                    <li className="active">Home</li>
                    <li>About Us</li>
                    <li>Track Order</li>
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