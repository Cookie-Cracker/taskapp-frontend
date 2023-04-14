import React, { useState, useEffect } from 'react';
import {
  Stack,
  FormControl,
  FormLabel,
  Switch,
  Input,
  Spacer,
  Button,
  Divider,
  Text,
} from '@chakra-ui/react';
import DropdownColor from '../../../components/DropdownColor';
import { useUpdateProjectMutation } from './projectsApiSlice';
import { useNavigate } from 'react-router-dom';

const ProjectFormEdit = props => {
  const { initRef, onClose, project } = props;
  const [name, setName] = useState(project.name);
  const [color, setColor] = useState(project.color);
  const [isFavorite, setIsFavorite] = useState(project.isFavorite);
  const [apiError, setApiError] = useState(null);

  const [nameError, setNameError] = useState(false);
  const handleNameChange = e => setName(e.target.value);
  const handleOnColorChange = e => setName(e.target.value);
  const handleIsfavoriteChange = e => setIsFavorite(e.target.checked);
  let canSave = [name].every(Boolean);
  const navigate = useNavigate();

  // const [addProject, { isLoading, isSuccess, isError, error }] = useAddProjectMutation()
  const [updateProject, { isLoading, isSuccess, isError, error }] =
    useUpdateProjectMutation();
  useEffect(() => {
    if (isSuccess) {
      onClose();

      // navigate('/app/projects')
    }
  }, [isSuccess, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!name) setNameError(true);
    if (name) {
      try {
        // const newProject = await addProject({ name, color, isFavorite }).unwrap()
        await updateProject({
          projectId: project.id,
          name,
          color,
          isFavorite,
        }).unwrap();
      } catch (error) {
        if (error?.data) {
          setApiError(error.data.message);
        }
      }
    }
  };

  return (
    <>
      <pre>{isFavorite.toString()}</pre>
      <pre>{color.toString()}</pre>
      <pre>{name.toString()}</pre>
      <form onSubmit={handleSubmit}>
        <Stack spacing={6} p={2}>
          <FormControl isInvalid={nameError}>
            <FormLabel>Project Name</FormLabel>
            <Input
              name="name"
              value={name}
              onChange={handleNameChange}
              ref={initRef}
              required
            />
          </FormControl>

          <DropdownColor
            color={color}
            setColor={setColor}
            onChange={handleOnColorChange}
          />
          <FormControl display="flex" alignItems="center">
            <Switch
              id="active-archive"
              pr={2}
              onChange={handleIsfavoriteChange}
              isChecked={isFavorite}
            />
            <FormLabel htmlFor="active-archive" mb="0">
              Add to favorites?
            </FormLabel>
          </FormControl>
          {apiError && (
            <Text color="red.500" fontSize="sm">
              {apiError}
            </Text>
          )}
          <Divider />
          <Stack direction={'row'} align={'start'} justifyContent={'end'}>
            <Spacer />
            <Button onClick={onClose} variant={'form'}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant={'form'}
              isDisabled={!canSave}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default ProjectFormEdit;
