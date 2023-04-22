import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Button,
  Stack,
  List,
  ListItem,
  useColorModeValue,
  Spinner,
} from '@chakra-ui/react';

import InboxSection from '../common/InboxSection';
import MenuSectionHeader from '../common/MenuSectionHeader';
import UserProjectsSection from '../common/UserProjectsSection';
import { colors } from '../../../theme/colors';
import { useGetProjectsTaskCountQuery } from '../../features/projects/projectsApiSlice';
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
const MobileNav = ({ onClose, isOpen }) => {
  const bg = useColorModeValue(colors.white, colors.black);
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
  let mobileNavContent;

  if (isLoading) {
    mobileNavContent = <Spinner />;
  } else if (isSuccess) {
    // console.log('projects', projects);
    const userProyects = filterInboxProjects(projects);

    const inbox = getInbox(projects);

    mobileNavContent = (
      <>
        <InboxSection inbox={inbox} onClose={onClose} />
        <MenuSectionHeader name={'Projects'} />
        <UserProjectsSection projects={userProyects} onClose={onClose} />
      </>
    );
  }

  let mobileNav;
  mobileNav = (
    <Drawer onClose={onClose} isOpen={isOpen} placement={'left'}>
      <DrawerOverlay />
      <DrawerContent bg={bg}>
        <DrawerCloseButton />

        <DrawerBody>
          <Stack>
            <List w="full" my={8}>
              {mobileNavContent}
            </List>
          </Stack>
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  return mobileNav;
};

export default MobileNav;
