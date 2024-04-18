import React from "react";

const ErrorAlert = ({ error, setError }) => {
    const handleReload = () => {
        setError(null);
        window.location.reload();
    };

    return (
        <div
            className='flex flex-col px-4 py-3 mt-5 w-96 bg-red-100 border border-red-400 text-red-700 rounded-md'
            role='alert'>
            <strong className='font-bold'>Holy smokes!</strong>
            <span className='mt-2 text-red-400 mx-auto'>{error}</span>
            <a
                onClick={handleReload}
                className='mt-2 mx-auto cursor-pointer font-bold hover:text-red-600'>
                <span>Click para recargar</span>
            </a>
        </div>
    );
};

export default ErrorAlert;
