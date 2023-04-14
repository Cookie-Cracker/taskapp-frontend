import { HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import React from 'react';
import { FiTag } from 'react-icons/fi';

const TaskLabels = ({ labels }) => {
  console.log('label', labels);
  return (
    <HStack pl={30} spacing={4}>
      {labels.map((label, index) => (
        <Tag
          size={'sm'}
          key={`${index}-${label}`}
          borderRadius={'full'}
          variant={'subtle'}
          colorScheme={label.color}
        >
          <TagLeftIcon as={FiTag} />
          <TagLabel>{label}</TagLabel>
        </Tag>
      ))}
    </HStack>
  );
};

export default TaskLabels;
