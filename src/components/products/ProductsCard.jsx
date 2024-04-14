import React from "react";
import OutlineBtn from "../uicomponents/OutlineBtn";
import { handleContact } from "../../config/sendMessage";
import ProductsDescription from "./ProductsDescription";

//Images
import cardsIcon from "../../assets/creditCardIcon.png";
import bostonIcon from "../../assets/bostonIcon.png";
import CalculateInstallments from "./CalculateInstallments";

const ProductsCard = ({ product, chargePayments }) => {
    const { cards, boston } = chargePayments;

    const title = product[0];
    const brand = product[1];
    const description = product[2];
    const image = product[5];
    const price = parseFloat(product[6]);
    const parsedPrice = price.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
    });

    return (
        <div className='mx-auto bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-san-juan-200 transition duration-300 ease-in-out max-w-sm'>
            <img className='focus:outline-none object-fit h-48 mx-auto' alt={title} src={image} />
            <div className='p-4'>
                <div className='flex justify-between items-center mb-3'>
                    <span className='bg-san-juan-500 text-white text-sm px-2 py-1 rounded-full uppercase font-bold'>
                        {brand}
                    </span>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-san-juan-600 text-xs'>Precio Contado</span>
                        <span className='text-san-juan-800 font-bold'>{parsedPrice}</span>
                    </div>
                </div>
                <h2 className='text-lg font-bold text-san-juan-900 mb-2'>{title}</h2>
                <ProductsDescription description={description} />
                <div className='flex justify-between mb-4 gap-2'>
                    <CalculateInstallments
                        price={price}
                        payments={cards}
                        icon={cardsIcon}
                        textLine1='Tarjeta'
                        textLine2='de Crédito'
                    />
                    <CalculateInstallments
                        price={price}
                        payments={boston}
                        icon={bostonIcon}
                        textLine1='Crédito'
                        textLine2='Boston'
                    />
                </div>
                <a onClick={() => handleContact(title)}>
                    <div className='flex justify-center'>
                        <OutlineBtn>Reservar</OutlineBtn>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ProductsCard;
