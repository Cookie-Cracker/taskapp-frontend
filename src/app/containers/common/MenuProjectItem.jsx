import React from 'react';
import { Link as LinkChakra, Box, Badge, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getColor } from '../../helpers/color_matcher';

const MenuProjectItem = ({ project }) => {
  const { name } = project;
  const { icon, count, color } = project;

  const projectLink = (
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
        alignItems="center"
        // justifyContent="center"
        w="full"
        _hover={{ textDecoration: 'none' }}
        to={`/app/project/${project.id}`}
      >
        <Badge
          borderRadius={'full'}
          w={2}
          h={2}
          textAlign="center"
          display="inline-block"
          bg={getColor(color)}
        />
        {/* {project.type === 'common' && (
          <ListIcon as={icon} fontSize={22} m={0} mr={2} />
        )} */}
        <Text pl={2}>{name}</Text>
      </LinkChakra>
      <Badge borderRadius={'full'} w={6} textAlign="center" variant={'nav'}>
        {'N/A'}
      </Badge>
    </Box>
  );

  return projectLink;
};

export default MenuProjectItem;
