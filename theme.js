import { extendTheme } from '@chakra-ui/react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--poppins-font'
});

const theme = extendTheme({
    colors: {
        brand: {
            50: "#0048B5",
            100: "#0048B5",
            200: "#0048B5",
            300: "#0048B5",
            400: "#0048B5",
            500: "#0048B5",
            600: "#0048B5",
            700: "#0048B5",
            800: "#0048B5",
            900: "#0048B5",
        }
    },
    fonts: {
        body: poppins.style.fontFamily,
        heading: poppins.style.fontFamily,
    },
});

export default theme;