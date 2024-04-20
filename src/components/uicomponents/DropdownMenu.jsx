import React from "react";
import { useProducts } from "../context/ProductsContext";

const DropdownMenu = () => {
    const { data: products, setFilteredProducts } = useProducts();
    const placeholder = "Todas las categorias";

    const getCategories = products.map((prod) => prod[4]);
    const categories = [...new Set(getCategories)];

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
                            className=' w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md'>
                            {placeholder}
                        </div>
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                onClick={() => handleFilterCategories(category)}
                                className='w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md'>
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
