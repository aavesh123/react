import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Banner from "./components/Banner"
import { Body } from "./components/Body"

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantDetails from "./components/RestaurantDetails";





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
            {/* <Banner /> */}
            <Outlet />
            {/* <Body /> */}
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantDetails />
            }
        ],
        errorElement: <ErrorPage />
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)