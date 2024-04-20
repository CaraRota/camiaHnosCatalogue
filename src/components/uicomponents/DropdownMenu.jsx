import React from "react";
import { useProducts } from "../context/ProductsContext";
import FireIcon from "./icons/FireIcon";
import MobileIcon from "./icons/MobileIcon";
import TvIcon from "./icons/TvIcon";
import WashingMachine from "./icons/WashingMachine";
import TechnologyIcon from "./icons/TechnologyIcon";
import FridgeIcon from "./icons/FridgeIcon";
import ChefIcon from "./icons/ChefIcon";
import NoCategoryIcon from "./icons/NoCategoryIcon";

const DropdownMenu = () => {
    const { data: products, setFilteredProducts } = useProducts();
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
        }
        setFilteredProducts(products.filter((prod) => prod[4] === category));
    };

    return (
        <div className='flex w-screen mx-auto dark:bg-gray-900 justify-center items-center'>
            <div className='text-gray-900 dark:text-gray-100 mt-5'>
                <div className='relative w-full group'>
                    <button className='py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold'>
                        Buscar por categorias
                    </button>
                    <div className='absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm'>
                        <div
                            onClick={() => handleFilterCategories(placeholder)}
                            className='flex items-center justify-center w-full cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md'>
                            {placeholder}
                        </div>
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => handleFilterCategories(category)}
                                className='flex items-center gap-2 w-full cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md'>
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
