import React from 'react';
import { useGetLabelsQuery } from './labelsApiSlice';
import {
    Spinner
} from '@chakra-ui/react';
import LabelFormEdit from './Label.FormEdit';
const LabelEdit = props => {

    const { initRef, onClose, labelId } = props;


    const { label } = useGetLabelsQuery('labelsList',
        {
            selectFromResult: ({ data }) => ({
                label: data?.entities[labelId]
            }),
        }
    )
    if (!label) return <Spinner />

    const content = <LabelFormEdit label={label} initRef={initRef} onClose={onClose} />
    return content

    // const [name, setName] = useState('');
    // const [color, setColor] = useState('');
    // const [isFavorite, setIsFavorite] = useState('');
    // const [apiError, setApiError] = useState(null);
    // const [nameError, setNameError] = useState(false)


    // const handleNameChange = e => setName(e.target.value);
    // const handleOnColorChange = e => setName(e.target.value);
    // const handleIsfavoriteChange = e => setIsFavorite(e.target.checked);
    // let canSave = [name].every(Boolean);
    // const [updateLabel, { isLoading, isSuccess, isError, error }] = useUpdateLabelMutation()


    // const handleSave = async (e) => {
    //     e.preventDefault()
    //     if (!name) {
    //         setNameError(true)
    //     }
    //     if (name) {
    //         try {
    //             const result = await updateLabel({ labelId, name, color, isFavorite }).unwrap()
    //             alert('All good')

    //         } catch (err) {
    //             if (err?.data) {
    //                 console.log('err', err)
    //                 setApiError(error.data.message)
    //             }
    //         }
    //     }


    // };
    // return (

    //     <form onSubmit={handleSave}>
    //         <Stack spacing={6} p={2}>
    //             <FormControl isInvalid={nameError}>
    //                 <FormLabel>Label Name:</FormLabel>
    //                 <Input
    //                     name="name"
    //                     value={name}
    //                     onChange={handleNameChange}
    //                     ref={initRef}
    //                     required
    //                 />
    //             </FormControl>

    //             <DropdownColor
    //                 color={color}
    //                 setColor={setColor}
    //                 onChange={handleOnColorChange}
    //             />
    //             <FormControl display="flex" alignItems="center">
    //                 <Switch
    //                     id="active-archive"
    //                     pr={2}
    //                     onChange={handleIsfavoriteChange}
    //                     isChecked={isFavorite}
    //                 />
    //                 <FormLabel htmlFor="active-archive" mb="0">
    //                     Add to favorites?
    //                 </FormLabel>
    //             </FormControl>
    //             {apiError && (
    //                 <Text color="red.500" fontSize="sm">
    //                     {apiError}
    //                 </Text>
    //             )}
    //             <Divider />
    //             <Stack direction={'row'} align={'start'} justifyContent={'end'}>
    //                 <Spacer />
    //                 <Button onClick={onClose} variant={'form'}>
    //                     Cancel
    //                 </Button>
    //                 <Button onClick={handleSave} variant={'form'} isDisabled={!canSave}>
    //                     Save
    //                 </Button>
    //             </Stack>
    //         </Stack>
    //     </form>
    // );
}

export default LabelEdit;
