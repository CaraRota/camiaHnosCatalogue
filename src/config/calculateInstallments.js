export const calculateInstallment = (price, cuotas, porcentaje, fijo) => {
    const totalCuotas = ((price + parseFloat(fijo)) * (1 + porcentaje)) / cuotas;
    const parsedCuotas = totalCuotas.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0,
    });
    return parsedCuotas;
};
