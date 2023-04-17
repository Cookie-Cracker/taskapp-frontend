import React from 'react';
import { ListItem } from '@chakra-ui/react';
import MenuProjectItem from './MenuProjectItem';
import {
  useGetProjectsQuery,
  useGetProjectsTaskCountQuery,
} from '../../features/projects/projectsApiSlice';
import { useNavigate } from 'react-router-dom';

const UserProjectsSection = props => {
  // const { data: projects, isLoading, isSuccess, isError, error } = useGetProjectsQuery('projectsList', {
  //   pollingInterval: 150000,
  // })
  const navigate = useNavigate();
  const { onClose } = props;
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
  let content;

  if (isLoading) {
    content = 'Loading';
  } else if (isSuccess) {
    const { ids, entities } = projects;
    content = ids.map((id, index) => (
      <ListItem key={index}>
        <MenuProjectItem project={entities[id]} onClose={onClose} />
      </ListItem>
    ));
  } else if (isError) {
    console.log('error from  taskstats', error);
    if (error.status === 403) {
      navigate('/auth/login');
    }
    content = <p>{error.data?.error}</p>;
  }
  return content;
};
export default UserProjectsSection;
