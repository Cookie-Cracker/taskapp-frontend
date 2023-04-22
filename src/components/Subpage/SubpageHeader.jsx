// import React, { useRef } from 'react';
// import {
//   Box,
//   HStack,
//   Heading,
//   Tooltip,
//   useDisclosure,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   FormControl,
//   FormLabel,
//   Input,
//   ModalFooter,
//   Button,
//   Divider,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   Select,
//   Stack,
//   Switch,
// } from '@chakra-ui/react';
// import { FiList, FiMenu, FiMoreHorizontal } from 'react-icons/fi';

// const SubpageHeader = props => {
//   const { title, actions = [] } = props;

//   const {
//     isOpen: isOpenEdit,
//     onOpen: onOpenEdit,
//     onClose: onCloseEdit,
//   } = useDisclosure();

//   let _actions = actions.map((action, index) => (
//     <Box key={`${action.name}${index}`}>
//       <Menu>
//         <Tooltip label={action.label} fontSize="md" placement="top-start">
//           <MenuButton
//             as={Button}
//             rightIcon={action?.icon}
//             _focus={{ boxShadow: 'outline' }}
//             variant={'menu'}
//             onClick={action.handleAction}
//           >
//             {action.label}
//           </MenuButton>
//         </Tooltip>

//         <MenuList>
//           <MenuItem>View</MenuItem>
//           <MenuDivider />
//           <MenuItem>Sort</MenuItem>
//         </MenuList>
//       </Menu>
//     </Box>
//   ));

//   let content = (
//     <Box p={4}>
//       <HStack justifyContent={'space-between'} align="center">
//         <Heading size={'md'}>{title}</Heading>
//         {actions.length > 0 && <HStack>{_actions}</HStack>}
//       </HStack>
//     </Box>
//   );
//   return content;
// };
// export default SubpageHeader;
