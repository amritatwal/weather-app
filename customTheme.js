import { createTheme } from "@nextui-org/react";

export const theme = createTheme({
    type: "light",
    theme: {
        colors: {
            // brand colors
            primary: '#FFFFFF',
            gradient: {
                rain: 'linear-gradient(to right, #20002c, #cbb4d4)',
                sunny: 'linear-gradient(180deg, #2BAFD0 0%, rgba(109, 213, 237, 0.33) 100%)',
                cloudy: 'linear-gradient(180deg, #605656 0%, rgba(168, 165, 165, 0.46) 100%)'
            },
        },
        fonts: {
            body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'"
        },
        fontSizes: {
            tiny: '.75rem',
            xs: '0.875rem',
            base: '1rem',
            sm: '1.25rem',
            md: '1.5rem',
            lg: '2.25rem',
            xl: '3rem'
        },
    }
});

