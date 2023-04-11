import React from 'react';
import { Flex } from '@chakra-ui/react';
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
import SubpageHeader from './SubpageHeader';

const Subpage = props => {
  const { title, children } = props;
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const content = (
    <Flex
      as={'main'}
      w={'full'}
      minH={'60%'}
      flexDirection="column"
      px={{ base: '2', md: '40' }}
      mx={{ base: '2', md: '40' }}
    >
      <SubpageHeader title={title} />
      {children}
    </Flex>
  );

  return content;
};

export default Subpage;
