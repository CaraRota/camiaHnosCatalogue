import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import FireIcon from "./icons/FireIcon";
import MobileIcon from "./icons/MobileIcon";
import TvIcon from "./icons/TvIcon";
import WashingMachine from "./icons/WashingMachine";
import TechnologyIcon from "./icons/TechnologyIcon";
import FridgeIcon from "./icons/FridgeIcon";
import ChefIcon from "./icons/ChefIcon";
import NoCategoryIcon from "./icons/NoCategoryIcon";
import CloseIcon from "./icons/CloseIcon";
import MagnifyingGlassIcon from "./icons/MagnifyingGlassIcon";

import "animate.css";

const DropdownMenu = () => {
    const { data: products, setFilteredProducts } = useProducts();
    const [openMenu, setOpenMenu] = useState(false);
    const [firstUpdate, setFirstUpdate] = useState(true);
    const placeholder = "Todas las categorias";

    const getCategories = products.map((prod) => prod[4]);
    const categories = [...new Set(getCategories)].sort();

    const icons = {
        Celulares: <MobileIcon />,
        Tecnologia: <TechnologyIcon />,
        Lavado: <WashingMachine />,
        Heladeras: <FridgeIcon />,
        Cocinas: <ChefIcon />,
        TV: <TvIcon />,
        Calefaccion: <FireIcon />,
    };

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
        <div className='flex w-screen mx-auto dark:bg-san-juan-900 justify-center items-center'>
            <div className='text-san-juan-900 dark:text-san-juan-100 mt-5'>
                <div id='dropdownMenu' className='relative w-full group'>
                    <button
                        onClick={() => {
                            setOpenMenu(!openMenu);
                            setFirstUpdate(false);
                        }}
                        className='flex items-center justify-between py-3 px-4 w-full min-w-72 md:text-sm text-site bg-white hover:bg-san-juan-100 border rounded-full focus:border-brand focus:outline-none focus:ring-0 font-semibold'>
                        {openMenu ? (
                            <span className='flex gap-2 items-center justify-center py-0'>
                                <CloseIcon />
                                Cerrar
                            </span>
                        ) : (
                            <span className='flex gap-2 items-center justify-center py-0'>
                                <MagnifyingGlassIcon />
                                Buscar por categorias
                            </span>
                        )}
                    </button>
                    <div
                        className={`absolute z-[99] top-[110%] ${
                            firstUpdate && "invisible"
                        } left-[15%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max duration-200 p-1 bg-san-juan-100 dark:bg-san-juan-800 border border-dimmed text-xs md:text-sm ${
                            openMenu
                                ? "animate__animated animate__flipInX"
                                : "animate__animated animate__flipOutX"
                        }`}>
                        <div
                            onClick={() => handleFilterCategories(placeholder)}
                            className='flex items-center justify-center w-full cursor-pointer hover:bg-white dark:hover:bg-san-juan-900 dark:bg-san-juan-800 hover:text-link px-3 py-2 rounded-md'>
                            {placeholder}
                        </div>
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => handleFilterCategories(category)}
                                className='flex items-center gap-2 w-full cursor-pointer hover:bg-white dark:hover:bg-san-juan-900 dark:bg-san-juan-800 hover:text-link px-3 py-2 rounded-md'>
                                {icons[category] ? (
                                    <span>{icons[category]}</span>
                                ) : (
                                    <span>
                                        <NoCategoryIcon />
                                    </span>
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
