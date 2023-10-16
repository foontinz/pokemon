/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                glory: ["Glory", "sans"],
            },
            colors: {
                brown: "#594B4B",
            },
            backgroundColor: {
                gray: "#F2F2F2",
            },
        },
    },
    plugins: [],
}
