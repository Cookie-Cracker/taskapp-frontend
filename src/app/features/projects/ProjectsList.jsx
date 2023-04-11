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
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import ProjectItem from './ProjectItem';
import ModalForForms from '../../../components/ModalForForms';
import ProjectAdd from './Project.Add';
import { useGetProjectsQuery } from './projectsApiSlice';
const ProjectsList = () => {
  // const [projects, setProjects] = useState([]);

  const {
    isOpen: isOpenAddForm,
    onOpen: onOpenAddForm,
    onClose: onCloseAddForm,
  } = useDisclosure();
  const initialRef = useRef(null);

  const { data: projects, isLoading, isSuccess, isError, error } = useGetProjectsQuery('projectsList', {
    pollingInterval: 60000 * 2,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  })
  // const fetchProjects = async () => {
  //   const projects = await getAllProjects();
  //   setProjects(projects);
  // };

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  let projects_list;

  const form = (
    // <AddProjectForm isOpen={isOpenAddForm} onClose={onCloseAddForm} />
    <ModalForForms
      title="Add Project"
      isOpen={isOpenAddForm}
      onClose={onCloseAddForm}
    >
      <ProjectAdd onClose={onCloseAddForm} />
    </ModalForForms>
  );

  if (isLoading) {
    projects_list = <p>loading...</p>
  } else if (isSuccess) {
    projects_list = (
      <List>
        {projects.map(project => (
          <ProjectItem
            key={project._id}
            project={project}
            initialFocusRef={initialRef}
          />
        ))}
      </List>
    )
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

      {form}
    </>
  );

  return content;
};

export default ProjectsList;
