import {
  Box,
  IconButton,
  Text,
  HStack,
  Divider,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import { FiCheck, FiEdit3, FiMoreHorizontal } from 'react-icons/fi';
import TaskLabels from '../TaskLabels';
import DraggableHandle from '../DraggableHandle';
import TodayProjectBadge from './TodayProject.Badge';
const TodayItem = props => {
  const { task, handleComplete } = props;
  return (
    <>
      <Box
        display={'flex'}
        flexDirection={'column'}
        _hover={{
          bg: 'gray.50',
        }}
      >
        <HStack color={'gray.500'}>
          <DraggableHandle />
          <Box as={HStack} flex={1}>
            <Tooltip label="Complete Task" fontSize="md" placement="top-start">
              <IconButton
                icon={<FiCheck opacity={0} />}
                size={'xs'}
                variant={'outline'}
                rounded={'full'}
                boxShadow={'4xl'}
                _hover={{
                  '> svg': {
                    opacity: 1,
                  },
                }}
                // onClick={() => handleComplete(task.id)}
              />
            </Tooltip>

            {/* <Text fontSize={'small'}>{task.name}</Text> */}
            <Text fontSize={'small'}>{task?.name}</Text>
            {/* <Text fontSize={'small'}>{task.title}</Text> */}
          </Box>
          <TodayProjectBadge project={task.project_id} />

          {/* ACTIONS  START*/}
          <IconButton icon={<FiEdit3 />} border={'none'} variant={'ghost'} />

          <Menu placement="auto-end">
            <MenuButton
              as={IconButton}
              icon={<FiMoreHorizontal />}
              variant={'ghost'}
            >
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Edit</MenuItem>
              <Divider />
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
          {/* ACTIONS  END*/}
        </HStack>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          color={'gray.500'}
        >
          {task?.labels && task.labels.length > 0 && (
            <TaskLabels labels={task.labels} />
          )}
        </Box>
        <Divider py={1} />
      </Box>
    </>
  );
};

export default TodayItem;
