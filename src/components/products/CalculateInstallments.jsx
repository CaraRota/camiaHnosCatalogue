import React from "react";
import { calculateInstallment } from "../../config/calculateInstallments";

const CalculateInstallments = ({ price, payments, icon, textLine1, textLine2 }) => {
    return (
        <div className='border border-san-juan-100 rounded-md flex-1'>
            <div className='flex items-center pl-2 py-2'>
                <img
                    className='focus:outline-none size-7 rounded-md'
                    src={icon}
                    alt={`Foto de ${textLine1 + " " + textLine2}`}
                />
                <div className='focus:outline-none text-xs text-san-juan-900 pl-2'>
                    <p>{textLine1}</p>
                    <p>{textLine2}</p>
                </div>
            </div>
            {payments.map((payment, index) => (
                <div
                    key={index}
                    className='focus:outline-none text-xs text-san-juan-900 px-2 bg-san-juan-100 py-1'>
                    <p className='text-san-juan-900'>{payment.cuotas} cuotas de</p>
                    <p className='text-san-juan-500'>
                        {calculateInstallment(
                            price,
                            payment.cuotas,
                            payment.porcentaje,
                            payment.fijo
                        )}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default CalculateInstallments;
