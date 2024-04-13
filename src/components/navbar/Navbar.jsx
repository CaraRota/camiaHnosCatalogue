import React from "react";
import companyLogo from "../../assets/logo-camia-hnos.jpeg";

const Navbar = () => {
    return (
        <nav
            className='flex justify-between items-center h-16 bg-san-juan-700 text-black relative shadow-sm font-mono'
            role='navigation'>
            <a href='/' className='pl-8'>
                <img
                    className='h-12 rounded-md'
                    src={companyLogo}
                    alt='Camia Hnos! Logo de la empresa'
                />
            </a>
        </nav>
    );
};

export default Navbar;
