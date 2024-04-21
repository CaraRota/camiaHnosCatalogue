import React from "react";
import { HashLoader } from "react-spinners";

const Spinner = () => {
    return (
        <span className='flex justify-center items-center h-screen'>
            <HashLoader color='#d63636' />
        </span>
    );
};

export default Spinner;
