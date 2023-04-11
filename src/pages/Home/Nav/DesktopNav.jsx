import React from 'react';
import { Box, Link, Stack, useColorModeValue } from '@chakra-ui/react';

const DesktopNav = ({ links }) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  //   const linkHoverColor = useColorModeValue('gray.800', 'white');
  const linkHoverColor = useColorModeValue('orange.400', 'orange.50');
  return (
    <Stack direction={'row'} spacing={6}>
      {links.map((item, index) => (
        <Box key={item.label}>
          <Link
            href={item.href ?? '#'}
            fontSize={'sm'}
            fontWeight={'500'}
            _hover={{ textDecoration: 'none', color: linkHoverColor }}
          >
            {item.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
