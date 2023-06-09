import { useEffect } from 'react';
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
  FiLogOut,
} from 'react-icons/fi';

import { ColorModeSwitcher } from '../../../components/ColorModeSwitcher';
import { colors } from '../../../theme/colors';
import ModalForForms from '../../../components/ModalForForms';
import TaskAdd from '../../features/tasks/Task.Add';
import useAuth from '../../hooks/useAuth';
import { usePostLogoutMutation } from '../../features/auth/authApiSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrenProject } from '../../features/projects/projectSlice';
import { useGetProjectsQuery } from '../../features/projects/projectsApiSlice';
import { getInbox } from '../../helpers/userInbox';

const DesktopNav = ({ isOpen, handleSideButtonClick }) => {
  const navigate = useNavigate();

  const [postLogout, { isSuccess, isError, error }] = usePostLogoutMutation();
  const inbox = getInbox();
  useEffect(() => {
    if (isSuccess) navigate('/');
  }, [isSuccess, navigate]);

  const pr = useSelector(selectCurrenProject);

  const { project } = useGetProjectsQuery('projectList', {
    selectFromResult: ({ data }) => ({
      project: data?.entities[pr],
    }),
  });
  // console.log('pr', pr);

  const {
    isOpen: isAddTaskOpen,
    onOpen: onOpenAddTask,
    onClose: onCloseAddTask,
  } = useDisclosure();

  const { email } = useAuth();

  const taskModalForm = (
    <ModalForForms
      title="Add Task"
      isOpen={isAddTaskOpen}
      onClose={onCloseAddTask}
    >
      <TaskAdd onClose={onCloseAddTask} project={project} />
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

            <IconButton
              icon={<Icon as={FiHome} />}
              variant={'nav'}
              onClick={() => navigate(`/app/project/${inbox}`)}
            />
          </Flex>
          <Spacer />
          <Flex as={HStack} spacing={2}>
            <IconButton
              icon={<Icon as={FiPlus} />}
              variant={'nav'}
              onClick={onOpenAddTask}
            />
            <ColorModeSwitcher variant={'nav'} />

            <Menu>
              <MenuButton pr={2}>
                <Avatar name={email} size={'sm'} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <VStack alignItems={'start'}>
                    {email && (
                      <HStack>
                        <Avatar name={email} size={'md'} />
                        <Box as={VStack} alignItems={'start'} pl={2}>
                          <Text fontWeight={'bold'}> {email}</Text>
                          <Text fontSize={'sm'}> {email}</Text>
                        </Box>
                      </HStack>
                    )}
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

                <MenuItem icon={<FiCalendar />}>Brand New tab</MenuItem>
                <MenuItem icon={<FiCalendar />}>Brand New tab</MenuItem>
                <MenuItem icon={<FiCalendar />}>Brand New tab</MenuItem>
                <MenuItem icon={<FiCalendar />}>Brand New tab</MenuItem>
                <Divider />
                <MenuItem icon={<FiLogOut />} onClick={postLogout}>
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
