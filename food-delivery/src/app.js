import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Banner from "./components/Banner"
import { Body } from "./components/Body"





const Footer = () => {
    return (
        <div className="wrapper footer-wrapper">
            Footer
        </div>
    )
}
const Layout = () => {
    return (
        <div className="wrapper layout-wrapper">
            <Header />
            <Banner />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Layout />)