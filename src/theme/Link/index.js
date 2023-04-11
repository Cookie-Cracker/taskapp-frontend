import { colors } from "../colors"
import { mode } from "@chakra-ui/theme-tools"

export const Link = {
    Link: {
        baseStyle: {
            _hover: {
                textDecoration: "none",
                color: mode(colors.brand.light["300"], colors.brand.light["200"]),

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