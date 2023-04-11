import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useGetLabelsQuery, useUpdateLabelMutation } from './labelsApiSlice';
import {
    Stack,
    FormControl,
    FormLabel,
    Switch,
    Input,
    Spacer,
    Button,
    Divider,
    Text
} from '@chakra-ui/react';
import DropdownColor from '../../../components/DropdownColor';
const FormEdit = props => {

    const { initRef, onClose, label } = props;
    const navigate = useNavigate()




    const [name, setName] = useState(label.name);
    const [color, setColor] = useState(label.color);
    const [isFavorite, setIsFavorite] = useState(label.isFavorite);
    const [apiError, setApiError] = useState(null);
    const [nameError, setNameError] = useState(false)


    const handleNameChange = e => setName(e.target.value);
    const handleOnColorChange = e => setName(e.target.value);
    const handleIsfavoriteChange = e => setIsFavorite(e.target.checked);
    let canSave = [name].every(Boolean);
    const [updateLabel, { isLoading, isSuccess, isError, error }] = useUpdateLabelMutation()


    useEffect(() => {
        if (isSuccess) {
            onClose()
        }
    }, [isSuccess, onClose]);

    const handleSave = async (e) => {
        e.preventDefault()
        if (!name) {
            setNameError(true)
        }
        if (name) {
            try {
                // const result = await addLabel({ name, color, isFavorite }).unwrap()
                const result = await updateLabel({ labelId: label.id, name, color, isFavorite }).unwrap()
                alert('All good')

            } catch (error) {
                if (error?.data) {
                    console.log('err', error)
                    setApiError(error.data.error)
                }
            }
        }


    };
    return (
        <>

            <form onSubmit={handleSave}>
                <Stack spacing={6} p={2}>
                    <FormControl isInvalid={nameError}>
                        <FormLabel>Label Name:</FormLabel>
                        <Input
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            ref={initRef}
                            required
                        />
                    </FormControl>

                    <DropdownColor
                        color={color}
                        setColor={setColor}
                        onChange={handleOnColorChange}
                    />
                    <FormControl display="flex" alignItems="center">
                        <Switch
                            id="active-archive"
                            pr={2}
                            onChange={handleIsfavoriteChange}
                            isChecked={isFavorite}
                        />
                        <FormLabel htmlFor="active-archive" mb="0">
                            Add to favorites?
                        </FormLabel>
                    </FormControl>
                    {apiError && (
                        <Text color="red.500" fontSize="sm">
                            {apiError}
                        </Text>
                    )}
                    <Divider />
                    <Stack direction={'row'} align={'start'} justifyContent={'end'}>
                        <Spacer />
                        <Button onClick={onClose} variant={'form'}>
                            Cancel
                        </Button>
                        <Button onClick={handleSave} variant={'form'} isDisabled={!canSave}>
                            Save
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </>
    );
};

export default FormEdit;
