import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Subpage from '../../containers/Subpage/Subpage';
import SubpageHeader from '../../containers/Subpage/SubpageHeader';
import TasksList from '../tasks/TasksList';
import { useGetProjectsQuery } from './projectsApiSlice';

import { useGetProjectTasksQuery } from '../tasks/taskApiSlice';
import {
  Spinner,
  useDisclosure,
  Button,
  IconButton,
  Box,
} from '@chakra-ui/react';
import NoData from '../../../components/NoData';
import TaskAdd from '../tasks/Task.Add';
import { FiPaperclip, FiPlusCircle, FiPlusSquare } from 'react-icons/fi';

const TasksByProject = () => {
  const { id } = useParams();

  const [showAddForm, setShowAddForm] = useState(false);
  // Define a function to handle the click event of the add button
  function handleAddClick() {
    setShowAddForm(true);
  }

  // Define a function to handle the click event of the cancel button
  function handleCancelClick() {
    setShowAddForm(false);
  }
  useEffect(() => {
    setShowAddForm(false);
  }, [id]);

  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProjectTasksQuery({
    projectId: id,
  });

  const { project } = useGetProjectsQuery('projectList', {
    selectFromResult: ({ data }) => ({
      project: data?.entities[id],
    }),
  });

  let addtask = showAddForm ? (
    <TaskAdd onClose={handleCancelClick} project={project} />
  ) : (
    // <Button onClick={handleAddClick}>Add Task</Button>
    <Box>
      <Button
        leftIcon={<FiPlusCircle />}
        variant="menu"
        onClick={handleAddClick}
      >
        Add
      </Button>
    </Box>
  );

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess && project) {
    const { ids, entities } = tasks;

    content =
      ids.length === 0 ? (
        <>
          {addtask}
          <NoData
            title="No Tasks Registered..."
            subtitle={'Add Tasks and Track Your Progress.'}
          />
        </>
      ) : (
        <>
          <TasksList list={ids} entities={entities} />
          {addtask}
        </>
      );
  }

  return (
    <Subpage>
      <SubpageHeader title={project?.name} />
      {content}
    </Subpage>
  );
};

export default TasksByProject;
