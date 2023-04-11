// import {
//   Box,
//   Container,
//   FormControl,
//   Input,
//   Stack,
//   Text,
//   Button,
//   Link,
//   Divider,
//   Flex,
//   Image,
// } from '@chakra-ui/react';
// import React from 'react';
// import { css } from '@emotion/react';
// import { FaFacebook, FaGoogle } from 'react-icons/fa';
// import ckeck_logo from '../../assets/img/logo.png';
// import signup from '../../assets/img/signup.png';
// const inputStyles = css`
//   input {
//     background-color: whiteAlpha;
//     -webkit-background-color: white; /* add -webkit prefix */
//   }
// `;

// const Signup = () => {
//   return (
//     <>
//       <Stack
//         direction={'row'}
//         flex={'flex'}
//         as={'header'}
//         alignItems={'center'}
//         px={10}
//         pt={10}
//       >
//         <Box>
//           <Image src={ckeck_logo} maxH={'50px'}></Image>
//         </Box>
//         <Text
//           display={{ base: 'none', md: 'block' }}
//           fontSize={'2xl'}
//           fontWeight="bold"
//         >
//           tasks
//         </Text>
//       </Stack>
//       <Stack
//         minH={'100vh'}
//         direction={{ base: 'column', md: 'row' }}
//         align={'center'}
//         justify={'center'}
//         padding={{ base: '4' }}
//       >
//         <Flex flex={1} my={5}>
//           <Box position={'relative'} align={'center'}>
//             <Image
//               alt={'Login Image'}
//               maxW={{ md: '50%' }}
//               display={{ base: 'none', md: 'block' }}
//               objectFit={'cover'}
//               src={signup}
//               borderRadius="2xl"
//             />
//           </Box>
//         </Flex>
//         <Container padding={{ base: 4, md: 8 }}>
//           <Text fontSize={'4xl'} fontWeight={'bold'}>
//             Sign Up
//           </Text>
//           <Stack my={5} direction="column">
//             <Button
//               leftIcon={<FaFacebook />}
//               variant="ghost"
//               border={'1px solid black'}
//             >
//               Facebook
//             </Button>
//             <Button
//               leftIcon={<FaGoogle />}
//               variant="ghost"
//               border={'1px solid black'}
//             >
//               Google
//             </Button>
//           </Stack>

//           <Stack>
//             <Stack spacing={2}>
//               <Box borderRadius={'5px'} border={'1px solid black'} p={2}>
//                 <Text fontSize={'smaller'} fontWeight={'hairline'} ps={4}>
//                   Email
//                 </Text>
//                 <FormControl>
//                   <Input
//                     type={'email'}
//                     border={'transparent'}
//                     placeholder={'Enter your email...'}
//                   />
//                 </FormControl>
//               </Box>
//               <Box borderRadius={'5px'} border={'1px solid black'} p={2}>
//                 <Text fontSize={'smaller'} fontWeight={'hairline'} ps={4}>
//                   Password
//                 </Text>
//                 <FormControl colorScheme={'whiteAlpha'}>
//                   <Input
//                     type={'password'}
//                     border={'transparent'}
//                     placeholder={'Enter your password...'}
//                   />
//                 </FormControl>
//               </Box>
//               <Button>Log in</Button>
//               {/* <Text
//                 as={Link}
//                 fontSize={'smaller'}
//                 fontWeight={'hairline'}
//                 textDecoration="underline"
//               >
//                 Forgot Password?
//               </Text> */}
//               <Text fontSize={'small'} fontWeight={'normal'}>
//                 By continuing with Google, Facebook, or Email, you agree to Mine
//                 <br />
//                 <Link textDecoration="underline" pr={1}>
//                   Terms of Service
//                 </Link>
//                 and
//                 <Link textDecoration="underline"> Privacy Policy</Link>.
//               </Text>
//               <Divider />
//               <Box textAlign={'center'}>
//                 <Text fontSize={'small'}>
//                   Already signed up?{' '}
//                   <Link pl={1} textDecoration="underline" href={'/auth/login'}>
//                     Go to login
//                   </Link>
//                 </Text>
//               </Box>
//             </Stack>
//           </Stack>
//         </Container>
//       </Stack>
//     </>
//   );
// };

// export default Signup;
