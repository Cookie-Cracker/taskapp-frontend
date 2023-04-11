import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import React from 'react';
import { FiSlack } from 'react-icons/fi';

const Logo = () => (
  <Flex
    w="full"
    alignItems="center"
    justifyContent="space-between"
    flexDirection="row"
    gap={4}
  >
    <Box display="flex" alignItems="center" gap={2}>
      <Icon as={FiSlack} fontSize={30} />
      <Text fontWeight="bold" fontSize="16">
        Tasks With Chackra
      </Text>
    </Box>
  </Flex>
);
export default Logo;
