import React from 'react';
import { Flex } from '@chakra-ui/react';
import SubpageHeader from './SubpageHeader';

const Subpage = props => {
  const { title, children } = props;

  const content = (
    <Flex
      as={'main'}
      w={'full'}
      minH={'60%'}
      flexDirection="column"
      px={{ base: '2', md: '40' }}
      mx={{ base: '2', md: '40' }}
    >
      {/* <SubpageHeader title={title} /> */}
      {children}
    </Flex>
  );

  return content;
};

export default Subpage;
