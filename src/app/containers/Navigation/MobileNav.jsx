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
  useColorModeValue,
} from '@chakra-ui/react';

import { NAV_LINKS } from '../common/Navlinks';
import MenuNavItem from '../common/MenuINavItem';
import InboxSection from '../common/InboxSection';
import MenuSectionHeader from '../common/MenuSectionHeader';
import UserProjectsSection from '../common/UserProjectsSection';
import { colors } from '../../../theme/colors';

const MobileNav = ({ onClose, isOpen }) => {
  const bg = useColorModeValue(colors.white, colors.black);
  return (
    <Drawer onClose={onClose} isOpen={isOpen} placement={'left'}>
      <DrawerOverlay />
      <DrawerContent bg={bg}>
        <DrawerCloseButton />

        <DrawerBody>
          <Stack>
            <List w="full" my={8}>
              {/* {NAV_LINKS.map((item, index) => (
                <>
                  <ListItem key={`${index}${item.label}`}>
                    <MenuNavItem item={item} />
                  </ListItem>
                </>
              ))} */}
              <InboxSection />
              <MenuSectionHeader name={'Projects'} />
              <UserProjectsSection onClose={onClose} />
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
