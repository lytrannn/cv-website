/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        './routes/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    main: '#fcf5e7',
                    contrast: '#191919',
                },
                brown: {
                    main: '#4e2a2a',
                    light: '#5c3a3e',
                },
                green: {
                    main: '#153828',
                    light: '#314028'
                },
                danger: {
                    main: '#ef4444',
                    light: '#f87171',
                    contrastText: '#FFFFFF',
                }
            },
        },
    },
    plugins: [],
}