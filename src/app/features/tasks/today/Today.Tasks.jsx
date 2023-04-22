import { useState } from 'react';
import { useGetTodayTasksQuery } from './todayApiSlice';
import { Spinner, Box, Button } from '@chakra-ui/react';
import NoData from '../../../../components/NoData';
import Subpage from '../../../containers/Subpage/Subpage';
import SubpageHeader from '../../../containers/Subpage/SubpageHeader';
import TodayList from './Today.List';
import TaskAdd from '../Task.Add';
import { FiPlusCircle } from 'react-icons/fi';

const TodayTasks = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  function handleAddClick() {
    setShowAddForm(true);
  }
  function handleCancelClick() {
    setShowAddForm(false);
  }
  const {
    data: tasks,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodayTasksQuery();
  let addtask = showAddForm ? (
    <TaskAdd onClose={handleCancelClick} />
  ) : (
    // <TaskAdd onClose={handleCancelClick} project={project} />
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
  } else if (isSuccess) {
    console.log('tasks', tasks);
    const { ids, entities } = tasks;
    content =
      ids.lenght === 0 ? (
        <>
          {addtask}
          <NoData
            title="You are all set Today"
            subtitle={'Wanna get busy. Add some tasks.'}
          />
        </>
      ) : (
        <>
          <TodayList ids={ids} entities={entities} />
          {addtask}
        </>
      );
  }
  return (
    <Subpage>
      <SubpageHeader title={'Today'} today />
      {content}
    </Subpage>
  );
};

export default TodayTasks;
