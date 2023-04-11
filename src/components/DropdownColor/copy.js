import { useState } from 'react';
import {
    Select,
    FormControl,
    FormLabel,
    Box,
    Flex,
    Circle,
    Text,
} from '@chakra-ui/react';
import { colors } from './colors';

function ColorDropdown() {
    const [selectedColor, setSelectedColor] = useState('');

    const handleChange = (event) => {
        setSelectedColor(event.target.value);
    };

    const renderColorOption = (color) => (
        <option key={color.value} value={color.value}>
            <Flex align="center">
                <Circle size="10px" bg={color.hex} mr="10px" />
                <Text>{color.name}</Text>
            </Flex>
        </option>
    );

    return (
        <FormControl>
            <FormLabel htmlFor="color-select">Select a color:</FormLabel>
            <Select
                id="color-select"
                value={selectedColor}
                onChange={handleChange}
                placeholder="Select color"
            >
                {colors.map((color) => renderColorOption(color))}
            </Select>
            {selectedColor && (
                <Box mt="20px">
                    <Text fontSize="xl" fontWeight="bold">
                        You have selected:
                    </Text>
                    <Flex align="center">
                        <Circle size="20px" bg={colors.find((c) => c.value === selectedColor).hex} mr="10px" />
                        <Text>{colors.find((c) => c.value === selectedColor).name}</Text>
                    </Flex>
                </Box>
            )}
        </FormControl>
    );
}

export default ColorDropdown;
