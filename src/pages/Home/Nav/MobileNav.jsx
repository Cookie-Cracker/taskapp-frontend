import { Stack, Text, Link, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const MobileNav = ({ links }) => {
  return (
    <Stack p={4} bg={useColorModeValue('white', 'gray.800')}>
      {links.map((link, index) => (
        <MobileNavItem key={index} item={link} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ item }) => {
  return (
    <Stack py={2} display={{ md: 'none' }}>
      <Flex
        py={2}
        as={Link}
        href={item.href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600}>{item.label}</Text>
      </Flex>
    </Stack>
  );
};

export default MobileNav;
