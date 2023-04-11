import {
  Box,
  Container,
  Link,
  Stack,
  Image,
  useColorModeValue,
  Text,
  SimpleGrid,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Button,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { FiMail } from 'react-icons/fi';
import footer_logo from '../../../assets/img/footer.png';

const Logo = props => {
  return (
    <Box display={'flex'} justifyContent="center">
      <Image
        src={footer_logo}
        width={{ base: '90%', md: '60%' }}
        fit={'cover'}
      />
    </Box>
  );
};
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (
    <Box
    // bg={useColorModeValue('gray.50', 'gray.900')}
    // color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW="6xl"
        justifyContent={'center'}
        alignItems={'center'}
        py={4}
      >
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr  1fr 1fr 2fr' }}
          columns={{ sm: 1, md: 4 }}
          spacing={{ sm: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          <Stack>
            <Logo />
          </Stack>
          <Stack
            direction={'column'}
            spacing={2}
            alignItems={{ base: 'center', md: 'start' }}
            display={'flex'}
            py={'5'}
          >
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Contact</Link>
            <Link href={'#'}>More</Link>
            <Link href={'#'}>Blog</Link>
          </Stack>
          <Divider display={{ base: 'block', md: 'none' }} />
          <Stack
            direction={'column'}
            spacing={2}
            alignItems={{ base: 'center', md: 'start' }}
            display={'flex'}
            py={'5'}
          >
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
          {/* <Divider display={{ base: 'block', md: 'none' }} /> */}

          <Stack alignItems={{ base: 'center', md: 'start' }} py={'5'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction="row" alignItems={{ base: 'center', md: 'start' }}>
              <FormControl>
                <Input type={'email'} placeholder={'Your email'} />
              </FormControl>
              <IconButton icon={<FiMail fontVariant={'ghost'} />} />
            </Stack>
          </Stack>

          {/* <Stack>
            <Logo />
          </Stack> */}
        </SimpleGrid>
        <Stack alignContent={'center'} alignItems="center" py={10}>
          {/* <Divider /> */}
          <Text fontSize={'sm'}>
            © {new Date().getFullYear()} Chakra Templates. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
