import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";
import svg from '../../assets/svg/nodata.svg'
const NoData = (props) => {
    const { title, subtitle } = props
    let content;
    content = (
        <Center display={'flex'} justifyContent="center" alignItems="center" height="full">
            <VStack flexDirection={'column'} alignItems={'center'} alignContent={'center'} spacing={5}>
                <Box width={'200px'} pb={20}>
                    <img
                        src={svg}
                        alt="My SVG"
                    />
                </Box>
                <Text fontSize={'md'} fontWeight={'bold'}>{title}</Text>
                <Text fontSize={'sm'} fontWeight={'thin'}>{subtitle}</Text>

            </VStack>
        </Center>
    )

    return content
}

export default NoData