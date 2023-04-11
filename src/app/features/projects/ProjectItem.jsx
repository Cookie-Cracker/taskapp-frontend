import React from 'react';
import {
  Box,
  HStack,
  Badge,
  Text,
  Tooltip,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { getColor } from '../../helpers/color_matcher';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link as ChackraLink } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  const content = (
    <Box
      display="flex"
      direction="row"
      minH="40px"
      alignItems={'center'}
      p={2}
      _hover={{
        '> div > svg': {
          opacity: 1,
        },
        '> div': {
          bg: 'gray.50',
        },
      }}
    >
      <Box w={'full'} py={2} borderRadius={'md'}>
        <ChackraLink>
          <HStack py={1}>
            <Badge
              borderRadius={'full'}
              w={3}
              h={3}
              textAlign="center"
              display="inline-block"
              bg={getColor(project.color)}
            />
            <Text pl={2}>{project.name}</Text>
          </HStack>
        </ChackraLink>
      </Box>
      <Box m={2}>
        <Menu>
          <Tooltip label="More Option" fontSize="md" placement="top-start">
            <MenuButton as={Button} variant={'menu'}>
              <FiMoreHorizontal />
            </MenuButton>
          </Tooltip>

          <MenuList>
            <MenuItem onClick={() => { }}>Edit Project</MenuItem>
            <MenuDivider />
            <MenuItem> Archive Project</MenuItem>
            <MenuItem>Delete Project</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
  return content;
};

export default ProjectItem;
