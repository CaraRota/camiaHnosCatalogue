import React from "react";
import OutlineBtn from "../uicomponents/OutlineBtn";

const ProductsCard = ({ product, chargePayments }) => {
    const { cards, boston } = chargePayments;
    const parsedPrice = parseFloat(product[6]);

    const calculateInstallment = (price, cuotas, porcentaje, fijo) => {
        const totalCuotas = (price * (1 + porcentaje) + parseFloat(fijo)) / cuotas;
        const parsedCuotas = totalCuotas.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 0,
        });
        return parsedCuotas;
    };

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
                <div className='flex items-center justify-between px-4 pt-4'>
                    <div>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='focus:outline-none'
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='#2c3e50'
                            fill='none'
                            strokeLinecap='round'
                            strokeLinejoin='round'>
                            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                            <path d='M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2'></path>
                        </svg>
                    </div>
                    <div className='bg-yellow-200 py-1.5 px-6 rounded-full'>
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
                        <div>
                            {cards.map((card, index) => (
                                <p
                                    key={index}
                                    className='focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1'>
                                    {card.cuotas} cuotas de{" "}
                                    {calculateInstallment(
                                        product[6],
                                        card.cuotas,
                                        card.porcentaje,
                                        card.fijo
                                    )}
                                </p>
                            ))}
                        </div>
                        <div className='pl-2'>
                            {boston.map((boston, index) => (
                                <p
                                    key={index}
                                    className='focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1'>
                                    {boston.cuotas} cuotas de{" "}
                                    {calculateInstallment(
                                        parsedPrice,
                                        boston.cuotas,
                                        boston.porcentaje,
                                        boston.fijo
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>
                    <OutlineBtn>Reservar</OutlineBtn>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
