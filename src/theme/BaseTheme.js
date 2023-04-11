import { extendTheme, } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

import { colors } from "./colors"
import { Button } from "./Button"
import { Badge } from "./Badge"
import { Link } from './Link'
import { Box } from './Box'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

export const BaseTheme = extendTheme({

    config,
    colors: colors,
    styles: {
        global: (props) => ({
            body: {
                bg: mode(colors.white, colors.black)(props),
                color: mode(colors.black, colors.white)(props),
            },

        }),
    },
    fonts: {
        body: "'Roboto', sans-serif",
        heading: "'Montserrat', sans-serif",
        mono: "'Inconsolata', monospace",
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "48px",
        "5xl": "64px",
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
    },
    components: {

        ...Button,
        ...Link,
        ...Badge,
        ...Box

    },

})


