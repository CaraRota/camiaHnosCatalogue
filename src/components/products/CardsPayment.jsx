import React from "react";
import cardsIcon from "../../assets/creditCardIcon.png";
import { calculateInstallment } from "../../config/calculateInstallments";

const CardsPayment = ({ price, cards }) => {
    return (
        <div className='border border-san-juan-100 rounded-md flex-1'>
            <div className='flex items-center mb-3'>
                <img
                    className='focus:outline-none size-7'
                    src={cardsIcon}
                    alt='Tarjeta de Credito'
                />
                <div className='focus:outline-none text-xs text-san-juan-900 pl-2'>
                    <p>Tarjetas</p>
                    <p>de Credito</p>
                </div>
            </div>
            {cards.map((card, index) => (
                <div
                    key={index}
                    className='focus:outline-none text-xs text-san-juan-900 px-2 bg-san-juan-100 py-1'>
                    <p className='text-san-juan-900'>{card.cuotas} cuotas de</p>
                    <p className='text-san-juan-500'>
                        {calculateInstallment(price, card.cuotas, card.porcentaje, card.fijo)}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CardsPayment;
