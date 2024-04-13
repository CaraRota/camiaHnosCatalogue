import React from "react";
import bostonIcon from "../../assets/bostonIcon.png";
import { calculateInstallment } from "../../config/calculateInstallments";

const BostonPayment = ({ parsedPrice, boston }) => {
    return (
        <div className='pl-2'>
            <div className='flex items-center mb-3'>
                <img className='focus:outline-none size-7' src={bostonIcon} alt='Credito Boston' />
                <p className='focus:outline-none text-xs text-gray-600 pl-2'>Credito Boston</p>
            </div>
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
    );
};

export default BostonPayment;
