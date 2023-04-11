import { colors } from '../constants/colors'

export const getColor = (color_name) => {
    return colors.find(c => c.value === color_name).hex
}