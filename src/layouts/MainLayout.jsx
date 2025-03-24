import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="mt-20 mb-20"> {/* Add margin top & bottom */}
                <Outlet />
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default MainLayout;
