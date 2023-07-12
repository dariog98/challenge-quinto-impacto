import { Box, InputGroup, InputRightElement, Input, Button, Spinner, Link, Text } from '@chakra-ui/react'
import useRegister from './Register/hooks/useRegister'
import { Link as ReachLink } from 'react-router-dom'
import { useState } from 'react'
import { ROUTES } from '../constants/Routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { loading, formManager, handleSubmit } = useRegister()
    return (
        <Box display='flex' justifyContent='center' alignItems='center' w='100%' h='100vh' background='teal'>
            <Box display='flex' flexDirection='column' gap='1rem' justifyContent='center' alignItems='center' borderWidth='1px' padding='4rem 2rem' background='white' borderRadius='lg'>

                <Input type='text' placeholder='Apellidos' {...formManager.register("surnames")}/>

                <Input type='text' placeholder='Nombres' {...formManager.register("names")}/>

                <Input type='text' placeholder='Username' {...formManager.register("username")}/>

                <Input type='text' placeholder='Teléfono' {...formManager.register("phone")}/>

                <Input type='text' placeholder='Dirección' {...formManager.register("address")}/>

                <InputGroup size='md'>
                    <Input type={showPassword ? 'text' : 'password'} placeholder='Contraseña' { ...formManager.register("password") }/>
                    <InputRightElement>
                        <Button colorScheme='teal' onClick={() => setShowPassword(show => !show)}>
                        {showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <InputGroup size='md'>
                    <Input type={showPassword ? 'text' : 'password'} placeholder='Confirmar contraseña' { ...formManager.register("password") }/>
                    <InputRightElement>
                        <Button colorScheme='teal' onClick={() => setShowPassword(show => !show)}>
                        {showPassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/>}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button colorScheme='orange' w='8rem' onClick={handleSubmit} disabled={loading}>
                    {loading ? <Spinner/> : 'REGISTRARSE'}
                </Button>

                <Link as={ReachLink} to={ROUTES.Login} mt='0.5rem'>
                    <Text color='blue'>Iniciar sesión</Text>
                </Link>
            </Box>
        </Box>
    )
}

export default Register