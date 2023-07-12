import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Text } from '@chakra-ui/react'

const Subtitle = ({ icon, title }) => {
    return (
        <Box display='flex' gap='0.75rem' alignItems='center' color='#808080'>
            <FontAwesomeIcon icon={icon} style={{ width: '1.75rem', height: '1.75rem' }}/>
            <Text fontSize='1.5rem' fontWeight='500'>{title}</Text>
        </Box>
    )
}

export default Subtitle