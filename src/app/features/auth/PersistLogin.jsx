import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from './authSlice';
import { useRefreshMutation } from './authApiSlice';
import { Outlet } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import Page404 from '../../../pages/404';

const PersistLogin = () => {
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);
  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();
  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      // React 18 Strict Mode

      const verifyRefreshToken = async () => {
        try {
          const response = await refresh();
          // console.log('response', response);
          // const { accessToken } = response.data
          setTrueSuccess(true);
        } catch (err) {
          console.error('persist login error', err);
        }
      };

      if (!token) verifyRefreshToken();
    }

    return () => (effectRan.current = true);

    // eslint-disable-next-line
  }, []);

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    console.log('from persist', error);
    content = (
      <Page404 message={error?.data?.message} statusCode={error?.status} />
    );
  } else if (isSuccess && trueSuccess) {
    content = <Outlet />;
  } else if (token && isUninitialized) {
    content = <Outlet />;
  }
  return content;
};

export default PersistLogin;
