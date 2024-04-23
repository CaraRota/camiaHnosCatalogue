import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";

//Icons
import NoCategoryIcon from "./icons/NoCategoryIcon";
import CloseIcon from "./icons/CloseIcon";
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon";
import { categoryIcons } from "./categoryIcons";

import "animate.css";

const DropdownMenu = () => {
    const { data: products, setFilteredProducts } = useProducts();
    const [openMenu, setOpenMenu] = useState(false);
    const [firstUpdate, setFirstUpdate] = useState(true);
    const placeholder = "Todas las categorias";

    const getCategories = products.map((prod) => prod[4]);
    const categories = [...new Set(getCategories)].sort();

    const handleFilterCategories = (category) => {
        if (category === placeholder) {
            setFilteredProducts([]);
            setOpenMenu(false);
        }
        setFilteredProducts(products.filter((prod) => prod[4] === category));
        setOpenMenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openMenu && !document.getElementById("dropdownMenu").contains(event.target)) {
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    return (
        <div className='flex w-screen mx-autojustify-center items-center'>
            <div className='text-san-juan-900 mt-5'>
                <div id='dropdownMenu' className='relative w-full group'>
                    <button
                        onClick={() => {
                            setOpenMenu(!openMenu);
                            setFirstUpdate(false);
                        }}
                        className='flex items-center justify-between py-5 px-4 w-full min-w-64 md:text-sm text-site bg-white hover:bg-san-juan-100 border rounded-full focus:border-brand focus:outline-none focus:ring-0 font-semibold'>
                        <span
                            className={`absolute ${
                                openMenu
                                    ? "animate__animated animate__flipInX visible"
                                    : "invisible"
                            } flex gap-2 items-center`}>
                            <CloseIcon />
                            Cerrar
                        </span>
                        <span
                            className={`absolute ${
                                !openMenu
                                    ? "animate__animated animate__flipInX visible"
                                    : "invisible"
                            } flex gap-2 items-center`}>
                            <MagnifyingGlassIcon />
                            Buscar por categorias
                        </span>
                    </button>
                    <div
                        className={`${firstUpdate ? "invisible" : null}
                        absolute z-[99] top-[110%] left-[11%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max duration-200 p-1 bg-san-juan-100 border border-dimmed text-xs md:text-sm ${
                            openMenu
                                ? "animate__animated animate__flipInX"
                                : "animate__animated animate__flipOutX"
                        }`}>
                        <div
                            onClick={() => handleFilterCategories(placeholder)}
                            className='flex items-center justify-center w-full cursor-pointer hover:bg-white hover:text-link px-3 py-2 rounded-md'>
                            {placeholder}
                        </div>
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => handleFilterCategories(category)}
                                className='flex items-center gap-2 w-full cursor-pointer hover:bg-white hover:text-link px-3 py-2 rounded-md'>
                                {categoryIcons[category] ? (
                                    categoryIcons[category]
                                ) : (
                                    <NoCategoryIcon />
                                )}
                                {category ? category : "Sin categoria"}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
