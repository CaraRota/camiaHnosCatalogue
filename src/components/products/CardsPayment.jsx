import React from "react";
import cardsIcon from "../../assets/creditCardIcon.png";
import { calculateInstallment } from "../../config/calculateInstallments";

const CardsPayment = ({ price, cards }) => {
    return (
        <div className='border border-san-juan-100 rounded-md'>
            <div className='flex items-center mb-3'>
                <img
                    className='focus:outline-none size-7'
                    src={cardsIcon}
                    alt='Tarjeta de Credito'
                />
                <p className='focus:outline-none text-xs text-gray-600 pl-2'>Tarjeta de Credito</p>
            </div>
            {cards.map((card, index) => (
                <p
                    key={index}
                    className='focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1'>
                    {card.cuotas} cuotas de{" "}
                    {calculateInstallment(price, card.cuotas, card.porcentaje, card.fijo)}
                </p>
            ))}
        </div>
    );
};

export default CardsPayment;
