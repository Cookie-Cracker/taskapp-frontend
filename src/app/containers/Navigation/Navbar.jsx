import { useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Navbar = ({ handleToggleSidebar }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onToggle, onClose } = useDisclosure();

  // const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSideButtonClick = () =>
    isMobile ? onToggle() : handleToggleSidebar();

  return (
    <>
      <DesktopNav
        isOpen={isOpen}
        handleSideButtonClick={handleSideButtonClick}
      />
      <MobileNav onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default Navbar;
