import { colors } from "../colors"
import { mode } from "@chakra-ui/theme-tools"

export const Badge = {
    Badge: {
        baseStyle: {
            fontWeight: "sm",
        },
        variants: {
            sidebar: (props) => ({
                bg: mode(colors.nav.light, colors.nav.dark)(props),
                // color: mode(colors.white, colors.brand.light["900"])(props),

            }),

        },
    },
}