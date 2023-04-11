import {
  Avatar,
  Flex,
  Spacer,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  List,
  ListItem,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
import {
  RiHome4Fill,
  RiMenuLine,
  RiMoonLine,
  RiSunLine,
  RiAddFill,
  RiSettings3Line,
  //----------
  RiCalendarEventLine,
  RiCalendarTodoFill,
  RiStackLine,
} from 'react-icons/ri';
import { Icon } from '@chakra-ui/react';

const Navbar = ({ handleToggleSidebar }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        as="nav"
        w="100%"
        align="center"
        px={{ base: 4, sm: 6, md: '1.75rem' }}
        py={2}
      >
        <IconButton
          h={8}
          icon={<Icon as={RiMenuLine} />}
          variant="ghost"
          onClick={handleToggleSidebar}
        ></IconButton>
        <IconButton
          h={8}
          icon={<Icon as={RiHome4Fill} />}
          variant="ghost"
        ></IconButton>
        <Spacer />
        <HStack>
          <IconButton h={8} icon={<Icon as={RiAddFill} />}></IconButton>
          <IconButton
            h={8}
            icon={<Icon as={colorMode === 'light' ? RiMoonLine : RiSunLine} />}
            onClick={toggleColorMode}
          ></IconButton>

          <Menu>
            <MenuButton>
              <Avatar name="A F" size={'sm'}></Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Avatar name="A F "></Avatar>
                <List px={7}>
                  <ListItem>
                    <Text fontWeight={'bold'}> Alain Forteza</Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize={'sm'}> aforteza@email.com</Text>
                  </ListItem>
                </List>
              </MenuItem>
              <MenuItem icon={<RiSettings3Line />} command="⌘T">
                Settings
              </MenuItem>
              <Divider />
              <MenuItem icon={<RiCalendarEventLine />} command="⌘N">
                Brand New tab
              </MenuItem>
              <MenuItem icon={<RiCalendarTodoFill />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<RiStackLine />} command="⌘O">
                Open File...
              </MenuItem>
              <Divider />
              <MenuItem>v.1 . What's new</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
