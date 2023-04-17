import { useState, useEffect, useRef } from 'react';
import { getAllProjects } from '../../../services';
import Subpage from '../../containers/Subpage/Subpage';
import {
  Button,
  Divider,
  HStack,
  List,
  Text,
  useDisclosure,
  Box,
  Badge,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import ProjectItem from './ProjectItem';
import ModalForForms from '../../../components/ModalForForms';
import ProjectAdd from './Project.Add';
import ProjectEdit from './Project.Edit';
import { useGetProjectsQuery } from './projectsApiSlice';
import { getColor } from '../../helpers/color_matcher';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link as ChackraLink } from 'react-router-dom';
import { colors } from '../../../theme/colors';

const ProjectsList = () => {
  const bg = useColorModeValue(colors.brand.light.menu, colors.brand.dark.menu);

  // const [projects, setProjects] = useState([]);
  const {
    isOpen: isOpenAddForm,
    onOpen: onOpenAddForm,
    onClose: onCloseAddForm,
  } = useDisclosure();
  const {
    isOpen: isOpenEditForm,
    onOpen: onOpenEditForm,
    onClose: onCloseEditForm,
  } = useDisclosure();
  const initialRef = useRef(null);
  const [projectId, setProjectId] = useState('');
  const {
    data: projects,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProjectsQuery('projectsList', {
    pollingInterval: 60000 * 2,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  // const { data: projects, isLoading, isSuccess, isError, error } = useGetProjectsQuery()
  const handleEdit = projectId => {
    onOpenEditForm();
    setProjectId(projectId);
  };

  let projects_list;

  const addModal = (
    <ModalForForms
      title="Add Project"
      isOpen={isOpenAddForm}
      onClose={onCloseAddForm}
    >
      <ProjectAdd onClose={onCloseAddForm} />
    </ModalForForms>
  );
  const editModal = (
    <ModalForForms
      title="Edit Project"
      isOpen={isOpenEditForm}
      onClose={onCloseEditForm}
    >
      <ProjectEdit onClose={onCloseEditForm} projectId={projectId} />
    </ModalForForms>
  );

  if (isLoading) {
    projects_list = <p>loading...</p>;
  } else if (isError) {
  } else if (isSuccess) {
    const { ids, entities } = projects;
    projects_list = (
      <List>
        {ids.map(id => (
          // <ProjectItem
          //   key={entities[id]._id}
          //   project={entities[id]}
          //   initialFocusRef={initialRef}
          //   isOpen={isOpenEditForm}
          // />
          <Box
            key={entities[id]._id}
            display="flex"
            direction="row"
            // minH="40px"
            alignItems={'center'}
            _hover={{ bg: bg }}
            borderRadius={'3px'}
            overflow={'hidden'}
            p={2}
            // _hover={{
            //   '> div > svg': {
            //     opacity: 1,
            //   },
            //   '> div': {
            //     bg: 'gray.50',
            //   },
            // }}
          >
            <Box w={'full'} borderRadius={'md'}>
              <ChackraLink>
                <HStack py={1}>
                  <Badge
                    borderRadius={'full'}
                    w={3}
                    h={3}
                    textAlign="center"
                    display="inline-block"
                    bg={getColor(entities[id].color)}
                  />
                  <Text pl={2}>{entities[id].name}</Text>
                </HStack>
              </ChackraLink>
            </Box>
            <Box>
              <Menu>
                <Tooltip
                  label="More Option"
                  fontSize="md"
                  placement="top-start"
                >
                  <MenuButton as={Button} variant={'menu'}>
                    <FiMoreHorizontal />
                  </MenuButton>
                </Tooltip>

                <MenuList>
                  <MenuItem onClick={() => handleEdit(id)}>
                    Edit Project
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem> Archive Project</MenuItem>
                  <MenuItem>Delete Project</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        ))}
      </List>
    );
  }
  let content = (
    <>
      <Subpage title="Projects">
        {' '}
        <HStack display={'flex'} justifyContent={'space-between'} px={4}>
          <Text>Active/Archive Switch</Text>

          <Button
            leftIcon={<FiPlus />}
            variant={'menu'}
            size={'sm'}
            onClick={onOpenAddForm}
          >
            ADD PROJECT
          </Button>
        </HStack>
        <Divider />
        {projects_list}
      </Subpage>

      {addModal}
      {editModal}
    </>
  );

  return content;
};

export default ProjectsList;
