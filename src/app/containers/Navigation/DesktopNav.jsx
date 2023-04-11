import { useEffect, } from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  VStack,
  Heading,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import {
  FiCalendar,
  FiHome,
  FiMenu,
  FiPlus,
  FiSettings,
  FiX,
  FiLogOut
} from 'react-icons/fi';

import { ColorModeSwitcher } from '../../../components/ColorModeSwitcher';
import { colors } from '../../../theme/colors';
import ModalForForms from '../../../components/ModalForForms';
import TaskAdd from '../../features/tasks/Task.Add';
import useAuth from '../../hooks/useAuth';
import { usePostLogoutMutation } from '../../features/auth/authApiSlice';
import { useNavigate } from 'react-router-dom';

const DesktopNav = ({ isOpen, handleSideButtonClick }) => {
  const navigate = useNavigate()

  const [postLogout, { isSuccess, isError, error }] = usePostLogoutMutation()

  useEffect(() => {
    if (isSuccess) navigate('/')

  }, [isSuccess, navigate])

  const {
    isOpen: isAddTaskOpen,
    onOpen: onOpenAddTask,
    onClose: onCloseAddTask,
  } = useDisclosure();

  const { nickname, email } = useAuth()

  const taskModalForm = (
    <ModalForForms
      title="Add Task"
      isOpen={isAddTaskOpen}
      onClose={onCloseAddTask}
    >
      <TaskAdd onClose={onCloseAddTask} />
    </ModalForForms>
  );

  const bg = useColorModeValue(colors.brand.light[500], colors.nav.dark);
  return (
    <>
      <Box bg={bg}>
        <Flex
          as={'nav'}
          minH={'40px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
        >
          <Flex>
            <IconButton
              icon={isOpen ? <Icon as={FiX} /> : <Icon as={FiMenu} />}
              variant={'nav'}
              onClick={handleSideButtonClick}
            />

            <IconButton icon={<Icon as={FiHome} />} variant={'nav'} />
          </Flex>
          <Spacer />
          <Flex>
            <IconButton
              icon={<Icon as={FiPlus} />}
              variant={'nav'}
              onClick={onOpenAddTask}
            />
            <ColorModeSwitcher variant={'nav'} />

            <Menu>
              <MenuButton>
                <Avatar name="A F" size={'sm'} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <VStack alignItems={'start'}>
                    {email &&


                      <HStack>
                        <Avatar name={nickname} size={'md'} />
                        <Box as={VStack} alignItems={'start'} pl={2}>
                          <Text fontWeight={'bold'}> {nickname}</Text>
                          <Text fontSize={'sm'}> {email}</Text>
                        </Box>
                      </HStack>
                    }
                    <Box alignItems="start" as={HStack}>
                      <FiSettings />
                      <Heading
                        fontWeight="medium"
                        textTransform="uppercase"
                        fontSize="sm"
                        my={6}
                      >
                        <Text>Settings</Text>
                      </Heading>
                    </Box>
                  </VStack>
                </MenuItem>
                <Divider />

                <MenuItem icon={<FiCalendar />}>
                  Brand New tab
                </MenuItem>
                <MenuItem icon={<FiCalendar />}>
                  Brand New tab
                </MenuItem>
                <MenuItem icon={<FiCalendar />}>
                  Brand New tab
                </MenuItem>
                <MenuItem icon={<FiCalendar />}>
                  Brand New tab
                </MenuItem>
                <Divider />
                <MenuItem icon={< FiLogOut />} onClick={postLogout}>
                  Logout
                </MenuItem>

                <Divider />
                <MenuItem>v.1 . What's new</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      {taskModalForm}
    </>
  );
};

export default DesktopNav;
