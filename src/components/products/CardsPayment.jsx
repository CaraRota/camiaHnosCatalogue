import React from "react";
import cardsIcon from "../../assets/creditCardIcon.png";
import { calculateInstallment } from "../../config/calculateInstallments";

const CardsPayment = ({ parsedPrice, cards }) => {
    return (
        <div>
            <div className='flex items-center mb-3'>
                <img
                    className='focus:outline-none size-7'
                    src={cardsIcon}
                    alt='Tarjeta de Credito'
                />
                <p className='focus:outline-none text-xs text-gray-600 pl-2'>Tarjetas de Credito</p>
            </div>
            {cards.map((card, index) => (
                <p
                    key={index}
                    className='focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1'>
                    {card.cuotas} cuotas de{" "}
                    {calculateInstallment(parsedPrice, card.cuotas, card.porcentaje, card.fijo)}
                </p>
            ))}
        </div>
    );
};

export default CardsPayment;
