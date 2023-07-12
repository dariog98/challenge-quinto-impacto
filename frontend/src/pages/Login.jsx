import { Box, InputGroup, InputRightElement, Input, Button, Spinner, Link, Text } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import useLogin from './Login/hooks/useLogin'
import { ROUTES } from '../constants/Routes'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { loading, formManager, handleSubmit } = useLogin()
    return (
        <Box display='flex' justifyContent='center' alignItems='center' w='100%' h='100vh' background='teal'>
            <Box display='flex' flexDirection='column' gap='1rem' justifyContent='center' alignItems='center' borderWidth='1px' padding='4rem 2rem' background='white' borderRadius='lg'>

                <Input type='text' placeholder='Username' {...formManager.register("username")}/>

                <InputGroup size='md'>
                    <Input type={showPassword ? 'text' : 'password'} placeholder='Contraseña' { ...formManager.register("password") }/>
                    <InputRightElement width='4rem'>
                        <Button colorScheme='teal' onClick={() => setShowPassword(show => !show)}>
                        {showPassword ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Button colorScheme='orange' w='5rem' onClick={handleSubmit} disabled={loading}>
                    {loading ? <Spinner/> : 'LOGIN'}
                </Button>

                <Link as={ReachLink} to={ROUTES.Register} mt='0.5rem'>
                    <Text color='blue'>Registrarse</Text>
                </Link>
            </Box>
        </Box>
    )
}

export default Login