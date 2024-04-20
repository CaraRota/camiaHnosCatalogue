import React from "react";
import ProductsCard from "./ProductsCard";
import Spinner from "../uicomponents/Spinner";
import { useProducts } from "../context/ProductsContext";

const Products = () => {
    const { loading, data, chargePayments } = useProducts();

    return (
        <div className='my-5'>
            {loading || !chargePayments.cards ? (
                <Spinner />
            ) : (
                <div className='flex justify-center flex-row gap-5 flex-wrap'>
                    {data.map((column, index) => (
                        <div key={index}>
                            <ProductsCard product={column} chargePayments={chargePayments} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
