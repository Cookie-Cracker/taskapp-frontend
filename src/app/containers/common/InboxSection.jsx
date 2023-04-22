import { ListItem, Spinner } from '@chakra-ui/react';
import React from 'react';
import { NAV_LINKS } from './Navlinks';
import InboxMenuItem from './InboxMenuItem';
import {
  ListIcon,
  Link as LinkChakra,
  Box,
  Badge,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiArchive, FiClock, FiInbox, FiGrid } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setCurrentProject } from '../../features/projects/projectSlice';
import { useGetTodayTasksCountQuery } from '../../features/tasks/today/todayApiSlice';

const InboxSection = ({ inbox, onClose }) => {
  console.log('inbox', inbox);
  const id = inbox.entities[inbox.ids]._id;
  const dispatch = useDispatch();

  const {
    data: inboxSectionStats,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodayTasksCountQuery();

  const handleProjectClick = () => {
    dispatch(setCurrentProject(id));
    if (onClose) {
      onClose();
    }
  };

  let sectionTodayUpcoming;
  if (isLoading) {
    sectionTodayUpcoming = <Spinner />;
  } else if (isSuccess) {
    sectionTodayUpcoming = NAV_LINKS.map((item, index) => (
      <ListItem key={index}>
        <InboxMenuItem item={item} stats={inboxSectionStats} />
      </ListItem>
    ));
  }

  return (
    <>
      <ListItem>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          my={2}
          p={2}
          borderRadius={'3px'}
          _hover={{ bg: 'gray.500' }}
        >
          <LinkChakra
            display="flex"
            as={Link}
            gap={1}
            to={`/app/project/${id}`}
            onClick={handleProjectClick}
            alignItems="center"
            // justifyContent="center"
            w="full"
            _hover={{ textDecoration: 'none' }}
          >
            <ListIcon as={FiArchive} fontSize={22} m={0} mr={2} />
            <Text>{'Inbox'}</Text>
          </LinkChakra>
          <Badge borderRadius={'full'} w={6} textAlign="center" variant={'nav'}>
            {inbox.entities[inbox.ids].task_quantity}
          </Badge>
        </Box>
      </ListItem>

      {/* {NAV_LINKS.map((item, index) => (
        <ListItem key={index}>
          <InboxMenuItem item={item} />
        </ListItem>
      ))} */}
      {sectionTodayUpcoming}
    </>
  );
};

export default InboxSection;
