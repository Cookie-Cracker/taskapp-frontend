import React from 'react';
import {
  ListIcon,
  Link as LinkChakra,
  Box,
  Badge,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const InboxMenuItem = ({ item }) => {
  const { label, icon } = item;
  const link = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      my={2}
      p={2}
      borderRadius={'3px'}
      _hover={{ bg: 'gray.500' }}
    >
      <LinkChakra
        display="flex"
        as={Link}
        gap={1}
        to={'/app/labels'}
        alignItems="center"
        // justifyContent="center"
        w="full"
        _hover={{ textDecoration: 'none' }}
      >
        <ListIcon as={icon} fontSize={22} m={0} mr={2} />
        <Text>{label}</Text>
      </LinkChakra>
      <Badge borderRadius={'full'} w={6} textAlign="center" variant={'nav'}>
        {'1'}
      </Badge>
    </Box>
  );
  return link;
};

export default InboxMenuItem;
