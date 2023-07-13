import { Box, Stack, InputGroup, InputLeftAddon, Input, Button } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const Form = ({ defaultValues, inputs, isDisabled, handleAction }) => {
    const { register, reset, handleSubmit } = useForm({ defaultValues })

    const resetForm = () => {
        reset(defaultValues)
    }

    return (
        <Box display='flex' flexDirection='column' gap='1rem'>
            <Stack spacing='1rem'>
                {
                    inputs.map((input, index) =>
                        <InputGroup key={index} colorScheme='' variant={isDisabled ? 'filled' : 'outline'}>
                            <InputLeftAddon children={input.label} />
                            <Input type={input.type} {...register(input.name)} isDisabled={isDisabled}/>
                        </InputGroup>
                    )
                }
            </Stack>

            <Box display='flex' gap='1rem' justifyContent='flex-end'>
                <Button onClick={handleSubmit(handleAction)} colorScheme='green'>Guardar</Button>
                <Button onClick={resetForm} colorScheme='red'>Cancelar</Button>
            </Box>
        </Box>
    )
}

export default Form