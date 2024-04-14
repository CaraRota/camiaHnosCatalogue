import React from "react";

const OutlineBtn = ({ children }) => {
    return (
        <button className='block w-full mt-4 bg-san-juan-500 hover:bg-san-juan-600 text-white text-center py-2 rounded-md transition duration-300 ease-in-out'>
            {children}
        </button>
    );
};

export default OutlineBtn;
