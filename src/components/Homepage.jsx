import React from "react";
import Products from "./products/Products";

const Homepage = () => {
    return (
        <div className='flex justify-center items-center bg-white text-black shadow-sm font-mono'>
            <Products />
        </div>
    );
};

export default Homepage;
