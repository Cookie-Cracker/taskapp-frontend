import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './authApiSlice';
import { css } from '@emotion/react';

import {
  Box,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Stack,
  Text,
  Button,
  Link,
  Divider,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import check_logo from '../../../assets/img/logo.png';
import { setCredentials } from './authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [apiError, setApiError] = useState(null);

  const [login, { isLoading, isError, isSuccess }] = useLoginMutation();

  const handleEmailChange = event => {
    setEmail(event.target.value);
    setEmailError(false);
  };


  const handlePasswordChange = event => {
    setPassword(event.target.value);
    setPasswordError(false);
  };
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
        const { access_token } = await login({
          email,
          password,
        }).unwrap();

        dispatch(setCredentials({ access_token }));
        navigate('/app/projects/')

      } catch (err) {
        if (err?.data) {
          setApiError(err.data.error)
        }
        else {
          setApiError('no server response')
        }
      }

    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          <Image src={check_logo} maxH={'50px'}></Image>
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
        minH={'100vh'}
        direction={{ base: 'column', md: 'row' }}
        align={'center'}
        justify={'center'}
        padding={{ base: '4' }}
      >
        <Container padding={{ base: 4, md: 8 }}>
          <Text fontSize={'4xl'} fontWeight={'bold'}>
            Log in
          </Text>
          <Stack my={5} direction="column">
            <Button
              leftIcon={<FaFacebook />}
              variant="ghost"
              border={'1px solid #afafaf'}
            >
              Facebook
            </Button>
            <Button
              leftIcon={<FaGoogle />}
              variant="ghost"
              border={'1px solid #afafaf'}
            >
              Google
            </Button>
          </Stack>

          <Stack>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <Box borderRadius={'5px'} border={'1px solid #afafaf'} p={2}>
                  <Text fontSize={'smaller'} fontWeight={'hairline'}>
                    Email
                  </Text>
                  <FormControl isInvalid={emailError}>
                    <Input
                      type={'email'}
                      border={'transparent'}
                      placeholder={'Enter your email...'}
                      value={email}
                      onChange={handleEmailChange}
                    />
                    {emailError && (
                      <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </Box>
                <Box borderRadius={'5px'} border={'1px solid #afafaf'} p={2}>
                  <Text fontSize={'smaller'} fontWeight={'hairline'}>
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
                    />{' '}
                    {passwordError && (
                      <FormErrorMessage>Password is required.</FormErrorMessage>
                    )}
                  </FormControl>
                </Box>

                <Button type="submit">Log in</Button>
                {apiError && (
                  <Text color="red.500" fontSize="sm">
                    {apiError}
                  </Text>
                )}
                <Text
                  as={Link}
                  fontSize={'smaller'}
                  fontWeight={'hairline'}
                  textDecoration="underline"
                >
                  Forgot Password?
                </Text>
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
                    Don`t have an account?{' '}
                    <Link
                      pl={1}
                      textDecoration="underline"
                      href={'/auth/signup'}
                    >
                      Sign up
                    </Link>
                  </Text>
                </Box>
              </Stack>
            </form>
          </Stack>
        </Container>
        <Flex flex={1} my={5}>
          <Box position={'relative'} align={'center'}>
            <Image
              alt={'Login Image'}
              maxW={{ md: '70%' }}
              display={{ base: 'none', md: 'block' }}
              objectFit={'cover'}
              src={
                'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
              }
              borderRadius="2xl"
            />
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Login;
