import { Badge, Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { FiXCircle } from 'react-icons/fi'

const DueField = ({ due, setDue }) => {
    const options = {
        month: "short", // use abbreviated month name (e.g. Mar)
        day: "numeric", // use numeric day of the month (e.g. 3)
        year: "numeric" // use full year (e.g. 2023)
    };

    return (
        <Box as='flex' flexDirection={'row'} border={'1px solid #AFAFAF'} borderRadius={'md'} px={2}>
            <Badge borderRadius={'md'} >{due.toLocaleString('en-US', options)}</Badge>
            <IconButton variant={'form'} icon={<FiXCircle />} onClick={() => setDue(undefined)} size={'sm'} />
        </Box>
    )
}

export default DueField