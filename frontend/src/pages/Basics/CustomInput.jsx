import { Box, Input, InputGroup, InputLeftAddon, InputRightAddon, Text } from "@chakra-ui/react"

const CustomInput = ({ before, after, formManager, type, name, placeholder, validations, isReadOnly }) => {
    return (
        <Box display='flex' flexDirection='column' gap='0.5rem'>
            <InputGroup variant={isReadOnly ? 'filled' : 'outline'}>
                {
                    before && <InputLeftAddon children={before}/>
                }
                <Input type={type} placeholder={placeholder} {...formManager.register(name, validations)} isReadOnly={isReadOnly}/>
                {
                    after && <InputRightAddon children={after}/>
                }
            </InputGroup>

            <Box w='100%' display={formManager.errors?.[name] ? 'inherit' : 'none'} fontSize='0.75rem'>
                <Text color='red'>{formManager.errors?.[name]?.message}</Text>
            </Box>
        </Box>
    )
}

export default CustomInput