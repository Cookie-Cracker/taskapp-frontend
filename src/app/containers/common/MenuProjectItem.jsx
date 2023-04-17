import React from 'react';
import {
  Link as LinkChakra,
  Box,
  Badge,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { getColor } from '../../helpers/color_matcher';
import { colors } from '../../../theme/colors';
import { useDispatch } from 'react-redux';
import { setCurrentProject } from '../../features/projects/projectSlice';

const MenuProjectItem = props => {
  const { project, onClose } = props;
  const dispatch = useDispatch();
  const { name } = project;
  const { icon, count, color } = project;
  const bg = useColorModeValue(colors.brand.light.menu, colors.brand.dark.menu);

  const handleProjectClick = e => {
    dispatch(setCurrentProject(project.id));
    if (onClose) {
      onClose();
    }
  };

  const projectLink = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      my={2}
      p={2}
      borderRadius={'3px'}
      _hover={{ bg: bg }}
    >
      <LinkChakra
        display="flex"
        as={Link}
        gap={1}
        alignItems="center"
        // justifyContent="center"
        w="full"
        to={`/app/project/${project.id}`}
        onClick={handleProjectClick}
      >
        <Badge
          borderRadius={'full'}
          w={2}
          h={2}
          textAlign="center"
          display="inline-block"
          bg={getColor(color)}
          // _hover={
          //   {
          //     w: '3',
          //     h: '3'
          //   }
          // }
        />
        {/* {project.type === 'common' && (
          <ListIcon as={icon} fontSize={22} m={0} mr={2} />
        )} */}
        <Text pl={2}>{name}</Text>
      </LinkChakra>
      <Badge borderRadius={'full'} w={6} textAlign="center" variant={'nav'}>
        {project.task_quantity > 0 && project.task_quantity}
      </Badge>
    </Box>
  );

  return projectLink;
};

export default MenuProjectItem;
