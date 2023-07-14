import {  RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Box } from '@chakra-ui/react'
import { UserProvider } from './pages/Basics/UserProvider'

const App = () => {
    return (
        <UserProvider>
            <Box display='flex' w='100%' h='100vh'>
                <RouterProvider router={router}/>
            </Box>
        </UserProvider>
    )
}

export default App