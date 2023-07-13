import { Link as ReachLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ROUTES } from '../../constants/Routes'
import { Box, Text, Link } from '@chakra-ui/react'
import { useUserContext } from './UserProvider'


const Button = ({ route, title, icon }) => {
    const location = useLocation()
    const isActive = location.pathname === route
    
    return (
        <Link as={ReachLink} to={route} style={{ textDecoration: 'none' }}>
            <Box display='flex' flexDirection='column' alignItems='center' color={isActive && 'blue.500'} >
                <FontAwesomeIcon icon={icon} style={{ width: '2rem', height: '2rem' }}/>
                <Text>{title}</Text>
            </Box>
        </Link>
    )
}

const Navbar = () => {
    const { user } = useUserContext()

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' h='5rem' borderBottomWidth='1px' p='0rem 2rem'>
            <Box display='flex' gap='3rem'>
                <Button route={ROUTES.Classrooms} icon={faSchool} title='Clases'/>
                <Button route={ROUTES.Professors} icon={faChalkboardTeacher} title='Profesores'/>
                <Button route={ROUTES.Students} icon={faUsers} title='Alumnos'/>
            </Box>

            <Box>
                {
                    user &&
                    <>
                        <Text>@{user.username}</Text>
                    </>
                }
            </Box>
        </Box>
    )
}

export default Navbar