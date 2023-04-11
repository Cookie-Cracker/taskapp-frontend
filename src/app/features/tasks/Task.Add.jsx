import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Divider,
  Spacer,
} from '@chakra-ui/react';
import DueField from '../../../components/DueDate';
import DuePopOver from '../../../components/Popover/DuePopOver';
import DropdownProject from '../../../components/DropdownProject';

const TaskAdd = props => {
  const { initRef, onClose, save } = props;
  const [due, setDue] = useState('');
  // Define a function to handle the click event of the cancel button

  return (
    <Stack display={{ base: 'sm' }}>
      <Stack spacing={2}>
        <Box
          borderRadius={'5px'}
          border={'1px dashed gray'}
          p={2}
          _focusWithin={{ border: '1px solid gray' }}
        >
          <FormControl>
            <Input
              type={'text'}
              border={'transparent'}
              placeholder={'Task Name'}
              ref={initRef}
            />
          </FormControl>
          <FormControl>
            <Input
              type={'text'}
              border={'transparent'}
              placeholder={'Description'}
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
      <Divider />
      <Stack direction={'row'} align={'start'} justifyContent={'end'}>
        <DropdownProject />
        <Spacer />
        <Button onClick={onClose} variant={'form'}>
          Cancel
        </Button>
        <Button onClick={save} variant={'form'}>
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default TaskAdd;
