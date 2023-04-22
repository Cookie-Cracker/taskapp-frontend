import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Flex, Text, Link } from '@chakra-ui/react';
const Page404 = props => {
  const navigate = useNavigate();
  const { message, statusCode } = props;
  let loginLink = null;
  if (statusCode === 401 || statusCode === 403) {
    loginLink = (
      <Link as={RouterLink} to="/auth/login" ml={4}>
        Log in again
      </Link>
    );
  }

  let content = (
    <Flex justifyContent="center" alignItems="center" h="100vh" width={'full'}>
      <Text fontSize="4xl" fontWeight="bold">
        {statusCode || '404'}
      </Text>
      <Text mx={2} fontSize="2xl">
        |
      </Text>
      <Text fontSize="xl">{message || 'Page not found'}</Text>
      <Link as={RouterLink} onClick={() => navigate(-1)} ml={4}>
        Go Back
      </Link>
      {loginLink}
    </Flex>
  );
  return content;
};

export default Page404;
