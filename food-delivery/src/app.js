import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Banner from "./components/Banner"
import { Body } from "./components/Body"

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ContactUs from "./components/ContactUs";
// import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import RestaurantDetails from "./components/RestaurantDetails";


const AboutUs = lazy(() => import("./components/AboutUs"));


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
            <h1 class="text-3xl font-bold underline text-c">
                Hello world!
            </h1>
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
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <AboutUs />
                    </Suspense >
                )
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