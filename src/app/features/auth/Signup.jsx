import {
  Box,
  Container,
  FormControl,
  Input,
  Stack,
  Text,
  Button,
  Link,
  Divider,
  Flex,
  Image,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';

import { FaFacebook, FaGoogle } from 'react-icons/fa';
import ckeck_logo from '../../../assets/img/logo.png';
import { useSignupMutation } from './authApiSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const eRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  const [signUp, { isLoading, isSuccess, isError, error }] =
    useSignupMutation();

  const handleEmailChange = event => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
    setPasswordError(false);
  };
  useEffect(() => {
    eRef.current.focus();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (email && password) {
      try {
        const res = await signUp({ email, password }).unwrap();
        navigate('/auth/login');
      } catch (error) {
        console.log(error);
        error?.data
          ? setApiError(error.data.error)
          : setApiError('no server response');
      }
    }
  };

  return (
    <>
      <Stack
        direction={'row'}
        flex={'flex'}
        as={'header'}
        alignItems={'center'}
        px={10}
        pt={10}
      >
        <Box>
          <Image src={ckeck_logo} maxH={'50px'}></Image>
        </Box>
        <Text
          display={{ base: 'none', md: 'block' }}
          fontSize={'2xl'}
          fontWeight="bold"
        >
          tasks
        </Text>
      </Stack>
      <Stack
        minH={'85vh'}
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'center'}
        padding={{ base: '4', md: '20' }}
      >
        <Container padding={{ base: 4, md: 8 }}>
          <Text fontSize={'4xl'} fontWeight={'bold'}>
            Sign Up
          </Text>
          <Stack my={5} direction="column">
            <Button
              leftIcon={<FaFacebook />}
              variant="ghost"
              border={'1px solid black'}
            >
              Facebook
            </Button>
            <Button
              leftIcon={<FaGoogle />}
              variant="ghost"
              border={'1px solid black'}
            >
              Google
            </Button>
          </Stack>

          <Stack>
            <form onSubmit={handleSubmit}>
              {apiError && (
                <Text color="red.500" fontSize="sm">
                  {apiError}
                </Text>
              )}
              <Stack spacing={2}>
                <Box borderRadius={'5px'} border={'1px solid black'} p={2}>
                  <Text fontSize={'smaller'} fontWeight={'hairline'} ps={4}>
                    Email
                  </Text>
                  <FormControl isInvalid={emailError}>
                    <Input
                      type={'email'}
                      border={'transparent'}
                      placeholder={'Enter your email...'}
                      value={email}
                      onChange={handleEmailChange}
                      ref={eRef}
                    />
                    {emailError && (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </Box>
                <Box borderRadius={'5px'} border={'1px solid black'} p={2}>
                  <Text fontSize={'smaller'} fontWeight={'hairline'} ps={4}>
                    Password
                  </Text>
                  <FormControl
                    colorScheme={'whiteAlpha'}
                    isInvalid={passwordError}
                  >
                    <Input
                      type={'password'}
                      border={'transparent'}
                      placeholder={'Enter your password...'}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {passwordError && (
                      <FormErrorMessage>Password is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </Box>
                <Button type={'submit'}>Register</Button>

                <Text fontSize={'small'} fontWeight={'normal'}>
                  By continuing with Google, Facebook, or Email, you agree to
                  Mine
                  <br />
                  <Link textDecoration="underline" pr={1}>
                    Terms of Service
                  </Link>
                  and
                  <Link textDecoration="underline"> Privacy Policy</Link>.
                </Text>
                <Divider />
                <Box textAlign={'center'}>
                  <Text fontSize={'small'}>
                    Already signed up?{' '}
                    <Link
                      pl={1}
                      textDecoration="underline"
                      href={'/auth/login'}
                    >
                      Go to login
                    </Link>
                  </Text>
                </Box>
              </Stack>
            </form>
          </Stack>
        </Container>
        <Flex flex={1} my={5} display={{ base: 'none', md: 'block' }}>
          <Box position={'relative'} align={'center'}>
            <Image
              alt={'Login Image'}
              maxW={{ md: '50%' }}
              display={{ base: 'none', md: 'block' }}
              objectFit={'cover'}
              src={
                'https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              }
              borderRadius="2xl"
            />
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Signup;
