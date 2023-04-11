import {
  Button,
  Heading,
  Stack,
  Text,
  Box,
  Image,
  Container,
} from '@chakra-ui/react';
import React from 'react';
import { FiPlay } from 'react-icons/fi';
import cubes_orange from '../../assets/img/cubes-orange.png';
import { Navbar } from './Nav/Navbar';
import Footer from './Footer';
const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth={'7xl'}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Stack spacing={{ base: 4, sm: 6 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
                <Text
                  as={'span'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    bg: 'orange.400',
                    position: 'absolute',
                    bottom: 1,
                    borderRadius: '10px',
                    left: 0,
                    height: '10%',
                    transition: 'height  0.3s cubic-bezier(0.4, 0, 0.2, 1)',

                    zIndex: -1,
                  }}
                  _hover={{
                    _after: {
                      height: '30%',
                      bg: 'orange',
                      zIndex: -1,
                      transition: 'height  0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                  }}
                >
                  Write Once,
                </Text>
                <br />
                <Text color={'orange.400'}>User Everywhere!!!</Text>
              </Heading>
              <Text color={'gray.500'}>
                Snippy is a rich coding snippets app that lets you create your
                own code snippets, categorize them, and even sync them in the
                cloud so you can use them anywhere. All that is free!
              </Text>
            </Stack>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}
            >
              <Button rounded={'full'} px={6}>
                Get Started
              </Button>
              <Button
                rounded={'full'}
                px={6}
                variant={'solid'}
                leftIcon={<FiPlay />}
              >
                Just Do It
              </Button>
            </Stack>
          </Stack>

          <Stack
            flex={1}
            justify="center"
            align={'center'}
            position="relative"
            w={'full'}
          >
            <Box
              position={'relative'}
              height={'300px'}
              width={'full'}
              rounded={'2xl'}
              // boxShadow={'2xl'}
              overflow={'hidden'}
              color="inherit"
            >
              <Text
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'45%'}
                top={'40%'}
                fontWeight={'extrabold'}
                transform={'translateX(-50%) translateY(-50%)'}
              >
                vector
              </Text>
              <Text
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                fontWeight={'extrabold'}
                transform={'translateX(-50%) translateY(-50%)'}
              >
                CUBES
              </Text>
              <Image
                alt="green cubes"
                width={'100%'}
                height={'100%'}
                fit={'contain'}
                src={cubes_orange}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
