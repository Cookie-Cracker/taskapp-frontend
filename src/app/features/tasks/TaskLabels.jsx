import { HStack, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import React from 'react';
import { HiTag } from 'react-icons/hi';

const TaskLabels = ({ labels }) => {
  console.log('label', labels);
  return (
    <HStack pl={30} spacing={4}>
      {labels.map((label, index) => (
        <Tag
          size={'sm'}
          key={`${index}-${label._id}`}
          borderRadius={'full'}
          variant={'subtle'}
          // colorScheme={label.color}
          bg={'transparent'}
        >
          <TagLeftIcon as={HiTag} color={label.color} />
          <TagLabel fontSize={'small'} fontWeight={'hairline'}>
            {label.name}
          </TagLabel>
        </Tag>
      ))}
    </HStack>
  );
};

export default TaskLabels;
