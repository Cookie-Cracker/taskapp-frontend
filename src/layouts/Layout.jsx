// import { Flex, HStack, useDisclosure } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Sidebar from '../components/Sidebar/Sidebar';

// const Layout = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [collapse, setCollapse] = useState(false);
//   const handleToggleSidebar = () => {
//     setCollapse(!collapse);
//   };
//   return (
//     <>
//       {/* <VStack>
//         <Text>Nav</Text>
//       </VStack> */}
//       <Navbar handleToggleSidebar={handleToggleSidebar} />
//       <HStack w="full" h="95vh" bg="gray.100" p={10}>
//         {/* <HStack w="full" h="95vh" p={2}> */}
//         <Flex
//           as="aside"
//           w="full"
//           h="full"
//           // maxW={collapse && 350}
//           maxW={collapse ? 100 : 350}
//           bg="white"
//           alignItems="start"
//           padding={6}
//           flexDirection="column"
//           justifyContent="space-between"
//           transition="ease-in-out .2s"
//           borderRadius="3xl"
//           // check this
//           display={collapse && 'none'}
//         >
//           <Sidebar collapse={collapse} />
//         </Flex>
//         {/* <Flex
//           as="main"
//           w="full"
//           h="full"
//           bg="white"
//           alignItems="center"
//           justifyContent="center"
//           flexDirection="column"
//           position="relative"
//           borderRadius="3xl"
//         >
//           <IconButton
//             aria-label="Menu Colapse"
//             icon={<FaHamburger />}
//             position="absolute"
//             top={6}
//             left={6}
//             onClick={() => setCollapse(!collapse)}
//           />
//           <Text fontSize={100} color="gray.300">
//             Main
//           </Text>
//         </Flex> */}
//         <Outlet />
//       </HStack>
//     </>
//   );
// };

// export default Layout;
