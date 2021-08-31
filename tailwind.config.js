// const colors = require('tailwindcss/colors')

module.exports = {
    mode: "jit",
    purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "moderate-violet": "hsl(263, 55%, 52%)",
                "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
                "very-dark-blackish-blue": "hsl(219, 29%, 14%)",
                "light-gray": "hsl(0, 0%, 81%)",
                "light-grayish-blue": "hsl(210, 46%, 95%)",
            },
            boxShadow: {
                offset: "rgba(0, 0, 0, 0.10) 25px 25px 50px -12px",
            },
        },
    },
    plugins: [],
};
