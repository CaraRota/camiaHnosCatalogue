import React from "react";

const OutlineBtn = ({ children }) => {
    return (
        <button className='mt-5 bg-transparent hover:bg-san-juan-500 text-san-juan-700 font-semibold hover:text-white py-2 px-4 border border-san-juan-500 hover:border-transparent rounded'>
            {children}
        </button>
    );
};

export default OutlineBtn;
