import { List, Box } from '@chakra-ui/react';
import React from 'react';
import TodayItem from './Today.Item';

const TodayList = ({ ids, entities }) => {
  let content;

  content = (
    <List>
      {ids.map(id => (
        <Box key={id}>
          <TodayItem task={entities[id]} />
        </Box>
      ))}
    </List>
  );

  return content;
};

export default TodayList;
