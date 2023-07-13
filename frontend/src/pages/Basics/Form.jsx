import { Box, Stack, InputGroup, InputLeftAddon, Input, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const Form = ({ defaultValues, inputs, isEditMode, handleCloseEditMode, handleAction }) => {
    const { register, reset, handleSubmit } = useForm({ defaultValues })

    const handleCancel = () => {
        handleCloseEditMode()
        reset(defaultValues)
    }

    const handleConfirm = () => {
        const action = handleSubmit(handleAction)
        action()
        handleCloseEditMode()
    }

    return (
        <Box display='flex' flexDirection='column' gap='1rem'>
            <Stack spacing='1rem'>
                {
                    inputs.map((input, index) =>
                        <InputGroup key={index} colorScheme='' variant={!isEditMode ? 'filled' : 'outline'}>
                            <InputLeftAddon children={input.label} />
                            <Input type={input.type} {...register(input.name)} isReadOnly={!isEditMode}/>
                        </InputGroup>
                    )
                }
            </Stack>

            {
                isEditMode &&
                <Box display='flex' gap='1rem' justifyContent='flex-end'>
                    <Button onClick={handleConfirm} colorScheme='green'>Guardar</Button>
                    <Button onClick={handleCancel} colorScheme='red'>Cancelar</Button>
                </Box>
            }

        </Box>
    )
}

export default Form