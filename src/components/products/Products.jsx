import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import Spinner from "../uicomponents/Spinner";
import ErrorAlert from "../uicomponents/ErrorAlert";

const Products = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const sheetName = "Catalogo"; // Name of the Tab in Google Sheet
    const startRow = 2; // Skip header
    const [chargePercentage, setChargePercentage] = useState([]);
    const [chargeFixed, setChargeFixed] = useState([]);
    const [chargePayments, setChargePayments] = useState({});

    const handleChargePayments = (percentageArray, fixedArray) => {
        const cards = [
            {
                cuotas: 3,
                porcentaje: percentageArray[0].replace("%", "") / 100,
                fijo: fixedArray[0],
            },
            {
                cuotas: 6,
                porcentaje: percentageArray[1].replace("%", "") / 100,
                fijo: fixedArray[1],
            },
        ];

        const boston = [
            {
                cuotas: 6,
                porcentaje: percentageArray[2].replace("%", "") / 100,
                fijo: fixedArray[2],
            },
            {
                cuotas: 12,
                porcentaje: percentageArray[3].replace("%", "") / 100,
                fijo: fixedArray[3],
            },
        ];

        setChargePayments({ cards, boston });
    };

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const sheetID = import.meta.env.VITE_SH1TID;
            const APIKey = import.meta.env.VITE_GOOGLE_SHEET_API_KEY;

            try {
                const response = await axios.get(
                    `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${sheetName}!${startRow}:999999?key=${APIKey}`
                );

                const results = response.data.values;
                const filteredResults = results.filter((row) => row[0] && row[3] !== "");

                setError(null);
                setData(filteredResults);

                const percentageArray = [
                    results[0][9],
                    results[1][9],
                    results[2][9],
                    results[3][9],
                ];
                const fixedArray = [results[0][10], results[1][10], results[2][10], results[3][10]];

                setChargePercentage(percentageArray);
                setChargeFixed(fixedArray);

                // Call handleChargePayments after setting chargePercentage and chargeFixed
                handleChargePayments(percentageArray, fixedArray);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run effect only once on component mount

    return (
        <div className='my-5'>
            {error && (
                <ErrorAlert
                    error={error || "Ha ocurrido un error inesperado!"}
                    setError={setError}
                />
            )}
            {loading || !chargePayments.cards ? (
                <Spinner />
            ) : (
                <div className='flex justify-center flex-row gap-5 flex-wrap'>
                    {data.map((column, index) => (
                        <div key={index}>
                            <ProductsCard product={column} chargePayments={chargePayments} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
