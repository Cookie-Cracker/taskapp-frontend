import { colors } from "../colors"
import { mode } from "@chakra-ui/theme-tools"

export const Box = {
    Box: {
        baseStyle: {
            color: 'brand.text',
            fontWeight: 'hairline',
            fontSize: 'xs'


        },
        variants: {
            form: (props) => ({
                borderRadius: '5px',
            }),
            nav: (props) => ({
                bg: mode(colors.brand.light["500"], colors.nav.dark)(props),
                color: mode(colors.nav.light, colors.nav.light)(props),
                _hover: {
                    bg: mode(colors.brand.light["500"], colors.nav.hover)(props),
                    // bg: mode(colors.brand.light["600"], colors.brand.light["500"])(props),
                },
            }),
        }
    }
}