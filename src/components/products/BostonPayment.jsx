import React from "react";
import bostonIcon from "../../assets/bostonIcon.png";
import { calculateInstallment } from "../../config/calculateInstallments";

const BostonPayment = ({ price, boston }) => {
    return (
        <div className='border border-san-juan-100 rounded-md flex-1'>
            <div className='flex items-center mb-3'>
                <img
                    className='focus:outline-none size-7 rounded-md'
                    src={bostonIcon}
                    alt='Credito Boston'
                />
                <div className='focus:outline-none text-xs text-san-juan-900 pl-2'>
                    <p>Credito</p>
                    <p>Boston</p>
                </div>
            </div>
            {boston.map((boston, index) => (
                <div
                    key={index}
                    className='focus:outline-none text-xs text-san-juan-900 px-2 bg-san-juan-100 py-1'>
                    <p className='text-san-juan-900'>{boston.cuotas} cuotas de</p>
                    <p className='text-san-juan-500'>
                        {calculateInstallment(price, boston.cuotas, boston.porcentaje, boston.fijo)}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BostonPayment;
