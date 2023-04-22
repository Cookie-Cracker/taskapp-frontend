import {
  Box,
  useColorModeValue,
  List,
  useMediaQuery,
  SlideFade,
  Container,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { colors } from '../../../theme/colors';
import MenuSectionHeader from '../common/MenuSectionHeader';
import InboxSection from '../common/InboxSection';
import UserProjectsSection from '../common/UserProjectsSection';
import { useGetProjectsTaskCountQuery } from '../../features/projects/projectsApiSlice';

const filterUserProjects = projectList => {
  const filteredProjects = Object.values(projectList.entities).filter(
    project => !project.isInboxProject
  );
  return filteredProjects;
};

function filterInboxProjects(projects) {
  let userProjects = {};
  Object.entries(projects.entities).forEach(([id, project]) => {
    if (!project.isInboxProject) {
      userProjects[id] = project;
    }
  });
  return {
    ids: projects.ids.filter(id => userProjects[id]),
    entities: userProjects,
  };
}

function getInbox(projects) {
  let inbox = {};
  Object.entries(projects.entities).forEach(([id, project]) => {
    if (project.isInboxProject) {
      inbox[id] = project;
    }
  });
  return {
    ids: projects.ids.filter(id => inbox[id]),
    entities: inbox,
  };
}

const SidebarNav = ({ collapse }) => {
  const bg = useColorModeValue(colors.nav.light, colors.nav.dark);
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  const {
    data: projects,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProjectsTaskCountQuery('projectsStatsList', {
    pollingInterval: 50000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let sideContent;
  if (isLoading) {
    sideContent = <Spinner />;
  } else if (isSuccess) {
    // console.log('projects', projects);
    const userProyects = filterInboxProjects(projects);

    const inbox = getInbox(projects);
    // console.log('inbox', inbox);
    // console.log('userProy', userProyects);

    // const filtered_user_p
    sideContent = (
      <>
        <InboxSection inbox={inbox} />
        <MenuSectionHeader name={'Projects'} />
        <UserProjectsSection projects={userProyects} />
      </>
    );
  }

  let sidebar;

  sidebar = (
    <>
      <SlideFade in={!collapse} offsetY="20px">
        <Container
          bg={bg}
          h="94vh"
          width={collapse || isSmallerThan768 ? '0px' : '300px'}
          display={{ base: 'none', md: 'block' }}
          transition="width 0.5s ease-in-out"
        >
          <Box>
            <List w="full"></List>
          </Box>
          <Box pt={4}>
            <List w="full">
              {sideContent}
              {/* {commonSection}
              {menuSectionHeader}
              {userProjectsSection} */}
            </List>
          </Box>
        </Container>
      </SlideFade>
    </>
  );

  return sidebar;
};

export default SidebarNav;
