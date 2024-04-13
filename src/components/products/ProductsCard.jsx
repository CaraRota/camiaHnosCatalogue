import React from "react";
import OutlineBtn from "../uicomponents/OutlineBtn";

//Images
import bostonIcon from "../../assets/bostonIcon.png";
import CardsPayment from "./CardsPayment";
import BostonPayment from "./BostonPayment";

const ProductsCard = ({ product, chargePayments }) => {
    const { cards, boston } = chargePayments;
    const parsedPrice = parseFloat(product[6]);

    return (
        <div className='focus:outline-none mx-2 w-72 xl:mb-0 mb-8 bg-white border border-slate-500 rounded-lg py-2 hover:shadow-md hover:shadow-san-juan-500 hover:transition cursor-pointer'>
            <div>
                <img
                    className='focus:outline-none object-fit h-48 mx-auto'
                    alt={product[0]}
                    src={product[5]}
                />
            </div>
            <div className='bg-white'>
                <div className='flex items-center justify-center px-4 pt-4'>
                    <div className='bg-yellow-200 py-1.5 px-6 rounded-full text-center'>
                        <p className='focus:outline-none text-xs text-yellow-700 font-bold'>
                            {parsedPrice.toLocaleString("es-AR", {
                                style: "currency",
                                currency: "ARS",
                                maximumFractionDigits: 0,
                            })}
                        </p>
                    </div>
                </div>
                <div className='p-4'>
                    <div className='flex items-center'>
                        <h2 className='focus:outline-none text-lg font-semibold'>{product[0]}</h2>
                        <p className='focus:outline-none text-xs text-gray-600 pl-5'>
                            {product[1]}
                        </p>
                    </div>
                    <p className='focus:outline-none text-xs text-gray-600 mt-2'>{product[2]}</p>
                    <div className='flex mt-4'>
                        <CardsPayment parsedPrice={parsedPrice} cards={cards} />
                        <BostonPayment parsedPrice={parsedPrice} boston={boston} />
                    </div>
                    <div className='flex justify-center'>
                        <OutlineBtn>Reservar</OutlineBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
