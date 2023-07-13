import { Box, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/react"

const CustomInput = ({ before, after }) => {
    return (
        <Box>

            <InputGroup variant={isDisabled ? 'filled' : 'outline'}>
                {
                    before && <InputLeftAddon children={before}/>
                }
                <Input type='text' {...register(label.name)} isDisabled={isDisabled}/>
                {
                    after && <InputRightAddon children={after}/>
                }
            </InputGroup>

            <Input type='text' placeholder='Apellidos' {...formManager.register('surnames', { required: required })}/>

            <Box w='100%' display={formManager.errors?.surnames ? 'inherit' : 'none'} fontSize='0.75rem'>
                <Text color='red'>{formManager.errors?.surnames?.message}</Text>
            </Box>
        </Box>
    )
}

export default CustomInput