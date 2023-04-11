import { ListItem } from '@chakra-ui/react';
import React from 'react';
import { NAV_LINKS } from './Navlinks';
import InboxMenuItem from './InboxMenuItem';

const InboxSection = () => {
  return (
    <>
      {NAV_LINKS.map((item, index) => (
        <ListItem key={index}>
          <InboxMenuItem item={item} />
        </ListItem>
      ))}
    </>
  );
};

export default InboxSection;
