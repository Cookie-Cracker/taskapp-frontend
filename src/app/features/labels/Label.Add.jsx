import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useGetLabelsQuery } from './labelsApiSlice';
import {
  Stack,
  FormControl,
  FormLabel,
  Switch,
  Input,
  Spacer,
  Button,
  Divider,
  Text
} from '@chakra-ui/react';
import DropdownColor from '../../../components/DropdownColor';
import { useAddLabelMutation } from './labelsApiSlice';
const LabelAdd = props => {
  const { initRef, onClose, label } = props;
  const [name, setName] = useState('');
  const [color, setColor] = useState('charcoal');
  const [isFavorite, setIsFavorite] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [nameError, setNameError] = useState(false)



  const handleNameChange = e => setName(e.target.value);
  const handleOnColorChange = e => setName(e.target.value);
  const handleIsfavoriteChange = e => setIsFavorite(e.target.checked);
  let canSave = [name].every(Boolean);
  const navigate = useNavigate()
  const [addLabel, { isLoading, isSuccess, isError, error }] = useAddLabelMutation()
  useEffect(() => {
    if (isSuccess) {

      alert('all GOOD')
    }

  }, [isSuccess]);

  const handleSave = async (e) => {
    e.preventDefault()
    if (!name) {
      setNameError(true)
    }
    if (name) {
      try {
        const result = await addLabel({ name, color, isFavorite }).unwrap()

      } catch (err) {
        if (err?.data) {
          console.log('err', err)
          setApiError(error.data.message)
        }
      }
    }


  };
  return (
    <>
      <pre>{isFavorite.toString()}</pre>
      <pre>{color.toString()}</pre>
      <pre>{name.toString()}</pre>
      <form>
        <Stack spacing={6} p={2}>
          <FormControl isInvalid={nameError}>
            <FormLabel>Label Name</FormLabel>
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
            <Button onClick={handleSave} variant={'form'} isDisabled={!canSave}>
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

export default LabelAdd;
