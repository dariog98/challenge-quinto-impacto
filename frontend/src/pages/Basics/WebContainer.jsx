import Navbar from "./Navbar"
import { Box, Container } from '@chakra-ui/react'

const WebContainer = ({ children }) => {
    return (
        <Box flexGrow='1'>
            <Navbar/>
            <Container mt='1rem' maxW='container.md'>
                {children}
            </Container>
        </Box>
    )
}

export default WebContainer