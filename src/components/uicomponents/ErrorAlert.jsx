import React from "react";

const ErrorAlert = ({ error, setError }) => {
    const handleReload = () => {
        setError(null);
        window.location.reload();
    };

    return (
        <div
            className='flex flex-col bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
            role='alert'>
            <strong className='font-bold'>Holy smokes!</strong>
            <span className='block mx-auto'>{error}</span>
            <a onClick={handleReload} className='cursor-pointer mx-auto font-bold'>
                <span>Click para recargar</span>
            </a>
        </div>
    );
};

export default ErrorAlert;
