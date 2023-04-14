import React, { useState, useEffect } from 'react';
import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Divider,
  Spacer,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';
import DueField from '../../../components/DueDate';
import DuePopOver from '../../../components/Popover/DuePopOver';
import DropdownProject from '../../../components/DropdownProject';
import { useAddTaskMutation } from './taskApiSlice';
import { useNavigate } from 'react-router-dom';

const TaskAdd = props => {
  const { initRef, onClose, project } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState(false);
  const [due, setDue] = useState('');
  const [projectId, setProjectId] = useState(project._id);
  const [apiError, setApiError] = useState(null);

  const handleNameChange = e => setName(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);
  // const handleProjectIdChange = e => setProjectId(e.target.value);
  const navigate = useNavigate();
  const [addTask, { isLoading, isSuccess, isError, error }] =
    useAddTaskMutation();
  console.log('projectForomasasas', project._id);
  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!name) setNameError(true);
    if (name) {
      try {
        const addedTask = await addTask({
          name,
          description,
          due,
          project_id: projectId,
        }).unwrap();
      } catch (error) {
        if (error?.data.error) {
          setApiError(error.data.error);
        }
      }
    }
  };

  return (
    <Stack display={{ base: 'sm' }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <Box
            borderRadius={'5px'}
            border={'1px dashed gray'}
            p={2}
            _focusWithin={{ border: '1px solid gray' }}
          >
            <pre>{JSON.stringify(name)}</pre>
            <pre>{JSON.stringify(description)}</pre>
            <pre>{JSON.stringify(due)}</pre>
            <pre>{JSON.stringify(projectId)}</pre>
            <FormControl isInvalid={nameError}>
              <Input
                type={'text'}
                border={'transparent'}
                placeholder={'Task Name'}
                ref={initRef}
                value={name}
                onChange={handleNameChange}
              />
              <FormErrorMessage>Task name is a must!!!.</FormErrorMessage>
            </FormControl>
            <FormControl>
              <Input
                type={'text'}
                border={'transparent'}
                placeholder={'Description'}
                value={description}
                onChange={handleDescriptionChange}
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack direction={'row'} justifyContent={'start'}>
          {/* PROJECTS */}
          {/* due button or due date */}
          {due ? (
            <DueField due={due} setDue={setDue} />
          ) : (
            <DuePopOver setDue={setDue} />
          )}
        </Stack>
        {apiError && (
          <Text color="red.500" fontSize="sm">
            {apiError}
          </Text>
        )}
        <Divider />
        <Stack direction={'row'} align={'start'} justifyContent={'end'}>
          <DropdownProject
            current_project_id={project._id}
            setId={setProjectId}
          />
          <Spacer />
          <Button onClick={onClose} variant={'form'}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} variant={'form'}>
            Save
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default TaskAdd;
