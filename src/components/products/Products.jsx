import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsCard from "./ProductsCard";
import Spinner from "../uicomponents/Spinner";
import ErrorAlert from "../uicomponents/ErrorAlert";

const Products = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const sheetName = "Catalogo"; //Name of the Tab in Google Sheet
    const startRow = 2; // Skip header

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
                const filteredResults = results.filter((row) => row[0] !== "");
                setError(null);
                setData(filteredResults);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='my-5'>
            {error && (
                <ErrorAlert
                    error={error || "Ha ocurrido un error inesperado!"}
                    setError={setError}
                />
            )}
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex justify-center flex-row gap-5 flex-wrap'>
                    {data.map((column, index) => (
                        <div key={index}>
                            <ProductsCard product={column} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
