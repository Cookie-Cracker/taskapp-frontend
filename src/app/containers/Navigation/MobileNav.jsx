import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Button,
  Stack,
  List,
  ListItem,
} from '@chakra-ui/react';

import { NAV_LINKS } from '../common/Navlinks';
import MenuNavItem from '../common/MenuINavItem';

const MobileNav = ({ onClose, isOpen }) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} placement={'left'} size={'xs'}>
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerBody>
          <Stack>
            <List w="full" my={8}>
              {NAV_LINKS.map((item, index) => (
                <>
                  <ListItem key={`${index}${item.label}`}>
                    <MenuNavItem item={item} />
                  </ListItem>
                </>
              ))}
            </List>
          </Stack>
        </DrawerBody>
        <DrawerFooter borderTopWidth="1px">
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Submit</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
