import React from "react";
import Products from "./products/Products";
import ErrorAlert from "./uicomponents/ErrorAlert";

const Homepage = () => {
    return (
        <div className='flex flex-col justify-center items-center text-black'>
            <Products />
        </div>
    );
};

export default Homepage;
