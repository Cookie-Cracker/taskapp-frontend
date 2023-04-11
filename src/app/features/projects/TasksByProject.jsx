import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Subpage from '../../containers/Subpage/Subpage';
import { getTaskByProject, getTById } from '../../../services';
import TasksList from '../tasks/TasksList';

const TasksByProject = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  // const [taskByProject, setTaskByProject] = useState([]);

  const fetchTask = async id => {
    const tasks = await getTById(id);

    setTasks(tasks);
  };

  useEffect(() => {
    fetchTask(id);
  }, [id]);
  return (
    <Subpage title={id}>
      <TasksList list={tasks} />
    </Subpage>
  );
};

export default TasksByProject;
