export const calculateInstallment = (price, cuotas, porcentaje, fijo) => {
    const totalCuotas = (price * (1 + porcentaje) + parseFloat(fijo)) / cuotas;
    const parsedCuotas = totalCuotas.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
    });
    return parsedCuotas;
};
