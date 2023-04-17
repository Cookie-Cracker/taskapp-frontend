import { Modal, ModalHeader, ModalCloseButton, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import React from 'react'
import { useGetLabelsQuery } from '../../app/features/labels/labelsApiSlice'
import { colors } from '../../theme/colors'
import { useColorModeValue } from '@chakra-ui/react'

const ModalForForms = props => {


    const { title, children, isOpen, onClose, } = props

    const bg = useColorModeValue(colors.white, colors.black);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg={bg}>

                <ModalCloseButton />
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>

    )
}

export default ModalForForms