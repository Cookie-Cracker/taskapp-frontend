import { colors } from "../colors"
import { mode } from "@chakra-ui/theme-tools"

export const Button = {
    Button: {
        baseStyle: {
            // fontWeight: "bold",
            // borderRadius: "md",
            // fontSize: '50px'

        },
        variants: {
            solid: (props) => ({
                bg: mode(colors.brand.light["500"], colors.brand.light["600"])(props),
                color: mode(colors.white, colors.brand.light["900"])(props),
                _hover: {
                    // bg: mode(colors.brand.light["500"], colors.brand.light["600"])(props),
                    bg: mode(colors.brand.light["600"], colors.brand.light["500"])(props),
                },
            }),
            nav: (props) => ({
                bg: mode(colors.brand.light["500"], colors.nav.dark)(props),
                color: mode(colors.nav.light, colors.nav.light)(props),
                _hover: {
                    bg: mode(colors.brand.light["500"], colors.nav.hover)(props),
                    // bg: mode(colors.brand.light["600"], colors.brand.light["500"])(props),
                },
            }),
            menu: (props) => ({
                bg: mode('transparent', 'transparent')(props),
                color: mode(colors.nav.dark, colors.nav.light)(props),
                // _hover: {
                //     bg: mode(colors.brand.light["500"], colors.nav.hover)(props),
                // },
                transition: "all 0.2s",
                borderRadius: "md",
                // borderWidth: "1px",

                _hover: { bg: 'transparent', color: mode(colors.brand.light["500"], colors.brand.light["500"])(props) },
                _expanded: { bg: mode('transparent', 'transparent')(props), color: mode(colors.brand.light["500"], colors.brand.light["500"])(props) },
                // _focus: { boxShadow: 'outline' },
            }),
            form: (props) => ({
                bg: mode('transparent', 'transparent')(props),
                color: mode(colors.nav.dark, colors.nav.light)(props),
                // _hover: {
                //     bg: mode(colors.brand.light["500"], colors.nav.hover)(props),
                // },
                transition: "all 0.2s",
                borderRadius: "md",
                // borderWidth: "1px",
                size: 'xs',

                _hover: { bg: 'transparent', color: mode(colors.brand.light["500"], colors.brand.light["500"])(props) },
                _expanded: { bg: mode('transparent', 'transparent')(props), color: mode(colors.brand.light["500"], colors.brand.light["500"])(props) },
                // _focus: { boxShadow: 'outline' },
            }),
            outline: (props) => ({
                border: "1px solid",
                borderColor: mode(colors.brand.light["500"], colors.brand.light["600"])(props),
                color: mode(colors.brand.light["500"], colors.brand.light["600"])(props),
                _hover: {
                    bg: mode(colors.brand.light["500"], colors.brand.light["600"])(props),
                    color: mode(colors.white, colors.brand.light["900"])(props),
                },
            }),
            ghost: (props) => ({
                borderColor: mode(colors.brand.light["500"], colors.brand.light["600"])(props),
                color: mode(colors.brand.light["500"], colors.brand.light["600"])(props),
                _hover: {
                    bg: mode(colors.brand.light["500"], colors.brand.light["600"])(props),
                    color: mode(colors.white, colors.brand.light["900"])(props),
                },
            }),
            link: (props) => ({
                // bg: mode(colors.lightColor, colors.darkColor)(props),
                color: mode(colors.brand.light["500"], colors.brand.light["600"])(props),

                _hover: {
                    // bg: mode(colors.lightColor, colors.darkColor)(props),
                    color: mode(colors.white, colors.brand.light["900"])(props),
                },
            }),
        },
    },
}