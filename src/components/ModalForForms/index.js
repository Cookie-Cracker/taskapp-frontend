import { Modal, ModalHeader, ModalCloseButton, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'
import React from 'react'
import { useGetLabelsQuery } from '../../app/features/labels/labelsApiSlice'

const ModalForForms = props => {


    const { title, children, isOpen, onClose, } = props



    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>

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