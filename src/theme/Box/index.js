import { colors } from "../colors"
import { mode } from "@chakra-ui/theme-tools"

export const Box = {
    Box: {
        baseStyle: {
            background: 'red'

        },
        variants: {
            form: (props) => ({
                borderRadius: '5px',
            }),
        }
    }
}