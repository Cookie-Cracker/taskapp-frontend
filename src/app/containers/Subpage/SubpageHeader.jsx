import React, { useRef } from 'react';
import {
  Box,
  HStack,
  Heading,
  Tooltip,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Select,
  Stack,
  Switch,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FiList, FiMenu, FiMoreHorizontal } from 'react-icons/fi';
const SubpageHeader = props => {
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const { title, projectActions, taskActions, today } = props;

  let todayDate = new Date();
  todayDate = todayDate.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const _projectActions = (
    <>
      <Menu>
        <Tooltip label="View as.." fontSize="md" placement="top-start">
          <MenuButton
            as={Button}
            leftIcon={<FiList />}
            _focus={{ boxShadow: 'outline' }}
            variant={'menu'}
          >
            View
          </MenuButton>
        </Tooltip>

        <MenuList>
          <MenuItem>View</MenuItem>
          <MenuDivider />
          <MenuItem>Sort</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <Tooltip label="Option" fontSize="md" placement="top-start">
          <MenuButton as={Button} variant={'menu'}>
            <FiMoreHorizontal />
          </MenuButton>
        </Tooltip>

        <MenuList>
          <MenuItem onClick={onOpenEdit}>Edit</MenuItem>
          <MenuDivider />
          <MenuItem>Delete Task</MenuItem>
        </MenuList>
      </Menu>
    </>
  );

  const content = (
    <Box p={4}>
      <HStack justifyContent={'space-between'} align="center">
        <Heading size={'md'}>{title}</Heading>
        <Text>{today ? todayDate : ''}</Text>

        <Spacer />
        <HStack>{projectActions && _projectActions}</HStack>
      </HStack>
    </Box>
  );
  return content;
};

export default SubpageHeader;
