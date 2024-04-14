import React from "react";
import bostonIcon from "../../assets/bostonIcon.png";
import { calculateInstallment } from "../../config/calculateInstallments";

const BostonPayment = ({ price, boston }) => {
    return (
        <div className='border border-san-juan-100 rounded-md'>
            <div className='flex items-center mb-3'>
                <img
                    className='focus:outline-none size-7 rounded-md'
                    src={bostonIcon}
                    alt='Credito Boston'
                />
                <p className='focus:outline-none text-xs text-san-juan-950 pl-2'>Credito Boston</p>
            </div>
            {boston.map((boston, index) => (
                <p
                    key={index}
                    className='focus:outline-none text-xs text-san-juan-950 px-2 bg-san-juan-100 py-1'>
                    {boston.cuotas} cuotas de{" "}
                    {calculateInstallment(price, boston.cuotas, boston.porcentaje, boston.fijo)}
                </p>
            ))}
        </div>
    );
};

export default BostonPayment;
