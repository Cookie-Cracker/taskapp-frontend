import { transition } from "@chakra-ui/react"
import { colors } from "../colors"
import { mode } from "@chakra-ui/theme-tools"

export const Link = {
    Link: {
        baseStyle: {
            color: 'brand.text',
            fontWeight: 'hairline',
            fontSize: 'sm',
            _hover: {
                textDecoration: "none",
                // color: mode('red', 'white')
                color: mode(colors.brand.light["300"], colors.brand.light["600"]),
                '> span': {
                    w: '3',
                    h: '3',
                    marginTop: '-5px',
                    transition: 'width 0.3s ease, height 0.3s ease, marginTop 0.1s ease',
                }
            },
        },
        variants: {
            // For light mode
            light: {
                color: "brand.light.500",
                _hover: {
                    color: "brand.light.600",
                },
            },
            // For dark mode
            dark: {
                color: "brand.dark.500",
                _hover: {
                    color: "brand.dark.600",
                },
            },
        },
        _hover: {
            textDecoration: "underline",
        }
    }
}