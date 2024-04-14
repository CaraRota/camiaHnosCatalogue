const getTime = () => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 6 && hours < 12) return "Hola, buenos días!";
    if (hours >= 12 && hours <= 19) return "Hola, buenas tardes!";
    return "Hola, buenas noches!";
};

export const handleContact = (product) => {
    const phoneNumber = "+5493463406540";
    const sayHello = getTime();
    const headerMsg = "\nEstoy interesado en el siguiente producto:\n\n";

    const productName = "*" + product + "*";

    const encodedText = encodeURIComponent(sayHello + headerMsg + productName);
    const url = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(url);
};
