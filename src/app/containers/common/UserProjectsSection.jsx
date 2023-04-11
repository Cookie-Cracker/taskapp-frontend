import React from 'react';
import { ListItem } from '@chakra-ui/react';
import MenuProjectItem from './MenuProjectItem';
import { useGetProjectsQuery } from '../../features/projects/projectsApiSlice';
const UserProjectsSection = () => {
  const { data: projects, isLoading, isSuccess, isError, error } = useGetProjectsQuery('projectsList', {
    pollingInterval: 150000,
  })

  let content;

  if (isLoading) {
    content = 'Loading'
  } else if (isSuccess) {
    // console.log('projects', projects)
    content = (


      projects.map((project, index) => (
        <ListItem key={index}>
          <MenuProjectItem project={project} />
        </ListItem>
      ))

    )
  } else if (isError) {
    console.log('error', error)
    content = <p>error</p>
  }
  return content

};
export default UserProjectsSection;
