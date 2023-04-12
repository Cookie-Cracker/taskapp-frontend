/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect } from 'react';
import Subpage from '../../containers/Subpage/Subpage';
import {
  Box,
  Divider,
  HStack,
  Heading,
  IconButton,
  List,
  Spacer,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { getLabels } from '../../../services';
import { FiEdit2, FiMoreHorizontal, FiPlus, FiTrash2 } from 'react-icons/fi';
import { HiTag } from 'react-icons/hi';
import { getColor } from '../../helpers/color_matcher';
import ModalForForms from '../../../components/ModalForForms';
import LabelAdd from './Label.Add';
import { useGetLabelsQuery } from './labelsApiSlice';
import LabelEdit from './Label.Edit';

function LabelsList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit } = useDisclosure();
  const [labelId, setLabelId] = useState([]);

  const { data: labels, isLoading, isSuccess, isError, error } = useGetLabelsQuery()
  const handleEdit = (labelId) => {
    onOpenEdit();
    setLabelId(labelId)
  }
  let labelsList;
  if (isLoading) {
    labelsList = <p>loading...</p>
  } else if (isSuccess) {
    const { ids, entities } = labels
    labelsList = (

      <List>
        {ids.map((labelId, index) => (
          <Box
            key={`${entities[labelId].name}${index}`}
            p={2}
            _hover={{
              '> div > Button': {
                opacity: 1,
                top: '50%',
              },
            }}
          >
            <HStack borderBottomWidth={'thin'}>
              <HiTag color={getColor(entities[labelId].color)} />
              <Heading fontSize={'xs'} fontWeight={'thin'}>
                {entities[labelId].name}
              </Heading>
              <Spacer />
              <IconButton
                icon={<FiEdit2 />}
                variant={'menu'}
                size={'sm'}
                opacity={0}
                onClick={() => handleEdit(labelId)}
              />

              <Menu>
                <IconButton
                  icon={<FiMoreHorizontal />}
                  variant={'menu'}
                  size={'sm'}
                  opacity={0}
                  as={MenuButton}
                />
                <MenuList>
                  <MenuItem><FiEdit2 /><Text pl={2}>Edit</Text> </MenuItem>
                  <Divider />
                  <MenuItem> <FiTrash2 /><Text pl={2}>Delete Label</Text></MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>
        ))}
      </List>
    )
  }

  const addModal = (

    <ModalForForms title={'New Label'} isOpen={isOpen} onClose={onClose}>
      <LabelAdd onClose={onClose} />
    </ModalForForms>
  )
  const editModal = (
    <ModalForForms title={'Edit Label'} isOpen={isOpenEdit} onClose={onCloseEdit} >
      <LabelEdit onClose={onCloseEdit} labelId={labelId} />
    </ModalForForms>
  )


  const content = (
    <>
      <Subpage title={'Labels'}>
        <HStack display={'flex'} justifyContent={'space-between'} px={4}>
          <Text>Labels</Text>

          <IconButton icon={<FiPlus />} variant={'menu'} onClick={onOpen} />
        </HStack>
        <Divider color={'gray.50'} />
        {labelsList}
      </Subpage>


      {addModal}
      {editModal}
    </>
  );

  return content;
}

export default LabelsList;
