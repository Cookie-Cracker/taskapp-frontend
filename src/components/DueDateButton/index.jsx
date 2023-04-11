import { Button } from '@chakra-ui/react';
import React from 'react';

const DueDateButton = props => {
  return (
    <Button
      justifyContent="flex-start"
      width="100%"
      variant={'menu'}
      {...props}
    />
  );
};

export default DueDateButton;
