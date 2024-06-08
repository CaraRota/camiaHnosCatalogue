import React from "react";

const ProductsRibbon = ({ children }) => {
    return (
        <div className='absolute left-0 top-0'>
            <div className='uppercase absolute transform rounded-r-full bg-rose-600 shadow-sm shadow-san-juan-900 text-center text-sm text-san-juan-100 font-semibold py-1 top-[10px] w-[250px]'>
                {children}
            </div>
        </div>
    );
};

export default ProductsRibbon;
