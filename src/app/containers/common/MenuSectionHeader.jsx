import React from 'react';
import {
  Link as LinkChakra,
  Heading,
  Box,
  Text,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

const MenuSectionHeader = ({ name }) => {
  return (
    <LinkChakra _hover={{ textDecor: 'none' }} href="/app/projects">
      <Box
        w="full"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        _hover={{
          // Change the background color of the child Button component
          '> Button': {
            opacity: 1,
            top: '50%',
          },
        }}
      >
        <Heading
          fontWeight="medium"
          textTransform="uppercase"
          fontSize="sm"
          my={6}
        >
          <Text>{name}</Text>
        </Heading>
        <IconButton
          icon={<Icon as={FiPlus} />}
          variant="ghost"
          opacity={0}
          transition="opacity 0.2s ease-in-out, top 0.2s ease-in-out"
        />
      </Box>
    </LinkChakra>
  );
};
export default MenuSectionHeader;
