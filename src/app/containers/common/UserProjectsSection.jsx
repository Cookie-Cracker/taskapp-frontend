import React from 'react';
import { ListItem } from '@chakra-ui/react';
import MenuProjectItem from './MenuProjectItem';
import { useGetProjectsQuery, useGetProjectsTaskCountQuery, } from '../../features/projects/projectsApiSlice';
const UserProjectsSection = () => {
  // const { data: projects, isLoading, isSuccess, isError, error } = useGetProjectsQuery('projectsList', {
  //   pollingInterval: 150000,
  // })
  const { data: projects, isLoading, isSuccess, isError, error } = useGetProjectsTaskCountQuery('projectsList', { pollingInterval: 50000 })
  let content;

  if (isLoading) {
    content = 'Loading'
  } else if (isSuccess) {
    const { ids, entities } = projects
    content = (


      ids.map((id, index) => (
        <ListItem key={index}>
          <MenuProjectItem project={entities[id]} />
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
