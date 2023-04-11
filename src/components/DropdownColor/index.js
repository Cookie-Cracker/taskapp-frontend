import {
    Select,
    FormControl,
    Circle,
    Text,
    Stack
} from '@chakra-ui/react';

import { colors } from '../../app/constants/colors'
import { MdSettings } from 'react-icons/md'

const DropdownColor = ({ color, onChange, setColor }) => {

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    const renderColorOption = (color) => (
        <option key={color.value} value={color.value}>
            {/* <Circle size="10px" bg={color.hex} mr="10px" /> */}
            <MdSettings />
            <Text>{color.name}</Text>
        </option>
    );

    return (
        <>

            <FormControl>
                <Stack direction="horizontal" alignItems="center">
                    {color && (

                        <Circle size="20px" bg={colors.find((c) => c.value === color).hex} mr="10px" />

                    )}
                    <Select
                        id="color-select"
                        value={color}
                        onChange={handleChange}
                        placeholder="Select color"
                    >
                        {colors.map((color) => renderColorOption(color))}
                    </Select>


                </Stack>
            </FormControl>
            {/* <FormControl>
                <Stack direction="horizontal" alignItems="center">
                    <Circle size="20px" bg={colors.find((c) => c.value === 'charcoal').hex} mr="10px" />
                    <Select
                        id="color-select"
                        value="charcoal"
                        placeholder="Select color"
                    >
                        {colors.map((color) => renderColorOption(color))}
                    </Select>
                </Stack>
            </FormControl> */}
        </>
    );
}

export default DropdownColor;
