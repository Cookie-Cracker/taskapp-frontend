import React from 'react';
import {
  ListIcon,
  Link as LinkChakra,
  Heading,
  Box,
  Badge,
  Text,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
const SidebarMenuItem = ({ item }) => {
  const { label } = item;

  if (item.type === 'common' || item.type === 'user_project') {
    const { icon, count, color } = item;

    return (
      <Box display="flex" alignItems="center" justifyContent="center" my={2}>
        <LinkChakra
          display="flex"
          as={Link}
          gap={1}
          alignItems="center"
          // justifyContent="center"
          w="full"
          _hover={{ textDecoration: 'none' }}
        >
          {item.type === 'user_project' && (
            <Badge
              borderRadius={'full'}
              w={2}
              h={2}
              textAlign="center"
              display="inline-block"
              bg={color}
            />
          )}
          {item.type === 'common' && <ListIcon as={icon} fontSize={22} m={0} />}
          <Text>{label}</Text>
        </LinkChakra>
        <Badge borderRadius={'full'} w={6} textAlign="center">
          {count}
        </Badge>
      </Box>
    );
  }
  return (
    <LinkChakra _hover={{ textDecor: 'none' }}>
      <Box
        w="full"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
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
          <Text>{label}</Text>
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

export default SidebarMenuItem;
