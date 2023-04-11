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
} from '@chakra-ui/react';
import { FiList, FiMenu, FiMoreHorizontal } from 'react-icons/fi';
const SubpageHeader = props => {
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const { title, actions } = props;
  const content = (
    <Box p={4}>
      <HStack justifyContent={'space-between'} align="center">
        <Heading size={'md'}>{title}</Heading>
        <HStack>
          <Menu>
            <Tooltip label="View as.." fontSize="md" placement="top-start">
              <MenuButton
                as={Button}
                rightIcon={<FiList />}
                _focus={{ boxShadow: 'outline' }}
                variant={'menu'}
              >
                Actions
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
        </HStack>
      </HStack>
    </Box>
  );
  return content;
};

export default SubpageHeader;
