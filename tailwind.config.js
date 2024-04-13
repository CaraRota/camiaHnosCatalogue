/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                "san-juan": {
                    50: "#f4f6fb",
                    100: "#e8edf6",
                    200: "#cddaea",
                    300: "#a1bad8",
                    400: "#6e96c2",
                    500: "#4c79ab",
                    600: "#3a5f8f",
                    700: "#304d74",
                    800: "#2d4667",
                    900: "#283a52",
                    950: "#1a2537",
                },
            },
        },
    },
    plugins: [],
};
