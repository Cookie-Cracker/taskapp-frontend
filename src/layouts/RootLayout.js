import { useState } from 'react';
import Navbar from '../app/containers/Navigation/Navbar';
import {
  Flex
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import SidebarNav from '../app/containers/SideBar/SideBarNav'

// const SidebarContent = ({ onClose }) => {
//   return (
//     <Box>
//       <VStack>
//         <Button w="100%">Home</Button>
//         <Button w="100%">About</Button>
//         <Button w="100%">Contact</Button>
//       </VStack>
//     </Box>
//   );
// };
const RootLayout = () => {
  const [collapse, setCollapse] = useState(false);
  const handleToggleSidebar = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <Navbar handleToggleSidebar={handleToggleSidebar} />
      < Flex >
        <SidebarNav collapse={collapse} />

        <Outlet />
      </Flex >

    </>
  );
};

export default RootLayout;
