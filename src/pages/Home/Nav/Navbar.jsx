import {
  Box,
  Flex,
  IconButton,
  Text,
  useDisclosure,
  Button,
  Stack,
  Collapse,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { FiX, FiAlignJustify } from 'react-icons/fi';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Navlinks } from '../Navlinks';

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        // bg={useColorModeValue('white', 'gray.800')}
        // color={useColorModeValue('gray.600', 'gray.900')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FiX /> : <FiAlignJustify />}
            variant={'ghost'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
          // textAlign={useBreakpointValue({ base: 'center', md: 'start' })}
          // color={useColorModeValue('gray.800', 'white')}
          >
            Logo
          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav links={Navlinks} />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button
            as={Link}
            // fontSize={'sm'}
            // fontWeight={400}
            variant={Link}
            href={'/auth/login'}
          >
            Sign In
          </Button>
          <Button
            as={Link}
            display={{ base: 'none', md: 'inline-flex' }}
            // fontSize={'sm'}
            // fontWeight={600}
            // variant={'outline'}
            href={'#'}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <MobileNav links={Navlinks} />
        </Box>
      </Collapse>
    </Box>
  );
};
