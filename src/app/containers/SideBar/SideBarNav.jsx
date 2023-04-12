import {
  Box,
  useColorModeValue,
  List,
  useMediaQuery,
  SlideFade,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import { colors } from '../../../theme/colors';
import { useState, useEffect } from 'react';
import { getAllProjects } from '../../../services';
import MenuSectionHeader from '../common/MenuSectionHeader';
import InboxSection from '../common/InboxSection';
import UserProjectsSection from '../common/UserProjectsSection';
import { useGetProjectsQuery } from '../../features/projects/projectsApiSlice';

const SidebarNav = ({ collapse }) => {
  // const [projects, setProjects] = useState([]);
  // const fechtProjects = async () => {
  //   const projects = await getAllProjects();
  //   console.log('projects', projects);
  //   setProjects(projects);
  // };
  // useEffect(() => {
  //   fechtProjects();
  // }, []);



  const bg = useColorModeValue(colors.nav.light, colors.nav.dark);
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <SlideFade in={!collapse} offsetY="20px">
        <Container
          bg={bg}
          h="94vh"
          width={collapse || isSmallerThan768 ? '0px' : '300px'}
          // display={collapse  ? 'none' : 'block'}
          // display={collapse ? { base: 'none', md: 'block' } : 'block'}
          display={{ base: 'none', md: 'block' }}
          transition="width 0.5s ease-in-out"
        >
          <Box >
            <List w="full" ></List>
          </Box>
          <Box pt={4}>
            <List w="full" >
              <InboxSection />
              <MenuSectionHeader name={'Projects'} />
              <UserProjectsSection />
            </List>
          </Box>
        </Container>
      </SlideFade>
    </>
  );
};

export default SidebarNav;
