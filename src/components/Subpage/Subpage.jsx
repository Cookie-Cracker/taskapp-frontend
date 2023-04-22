// import React from 'react';
// import { Flex } from '@chakra-ui/react';
// import SubpageHeader from './SubpageHeader';
// import { FiList, FiMenu, FiMoreHorizontal } from 'react-icons/fi';

// const Subpage = props => {
//   const { children, title, actions } = props;

//   const handleAction1 = () => {
//     console.log('Action 1 clicked');
//   };

//   const handleAction2 = () => {
//     console.log('Action 2 clicked');
//   };

//   const _actions = [
//     { label: 'View', icon: <FiList />, handleAction: handleAction1 },
//     { label: 'Actions', icon: <FiMenu />, handleAction: handleAction2 },
//   ];

//   return (
//     <Flex
//       as={'main'}
//       w={'full'}
//       minH={'60%'}
//       flexDirection="column"
//       px={{ base: '2', md: '40' }}
//       mx={{ base: '2', md: '40' }}
//     >
//       <SubpageHeader title={title} actions={actions} />
//       {children}
//     </Flex>
//   );
// };

// export default Subpage;
