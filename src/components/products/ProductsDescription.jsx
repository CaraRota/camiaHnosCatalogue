import React, { useState } from "react";

const ProductsDescription = ({ description }) => {
    const [seeMore, setSeeMore] = useState(false);

    return description.length > 120 ? (
        <p className='flex flex-col text-sm text-san-juan-700 mb-4'>
            {seeMore ? description : `${description.slice(0, 120)}...`}
            {seeMore ? (
                <a
                    className='text-rose-400 cursor-pointer hover:text-rose-500'
                    onClick={() => setSeeMore(false)}>
                    Ver menos
                </a>
            ) : (
                <a
                    className='text-rose-400 cursor-pointer hover:text-rose-500'
                    onClick={() => setSeeMore(true)}>
                    Ver más
                </a>
            )}
        </p>
    ) : (
        <p className='text-sm text-san-juan-700 mb-4'>{description}</p>
    );
};

export default ProductsDescription;
