module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {}
    },
    daisyui: {
        themes: [{
            mytheme: {

                "primary": "#334477",

                "secondary": "#0077CC",

                "accent": "#FF7755",

                "neutral": "#DDCCAA",

                "base-100": "#FFFFFF",

                "info": "#93E6FB",

                "success": "#80CED1",

                "warning": "#EFD8BD",

                "error": "#E58B8B",
            },
        }, ],
    },
    plugins: [
        require("@tailwindcss/typography"), require('daisyui'),
    ],
};