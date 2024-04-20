import React from "react";
import Products from "./products/Products";
import DropdownMenu from "./uicomponents/DropdownMenu";
import ErrorAlert from "../components/uicomponents/ErrorAlert";
import { useProducts } from "./context/ProductsContext";

const Homepage = () => {
    const { error, setError } = useProducts();

    return (
        <div className='flex flex-col justify-center items-center text-black'>
            {error && (
                <ErrorAlert
                    error={error || "Ha ocurrido un error inesperado!"}
                    setError={setError}
                />
            )}
            <DropdownMenu />
            <Products />
        </div>
    );
};

export default Homepage;
