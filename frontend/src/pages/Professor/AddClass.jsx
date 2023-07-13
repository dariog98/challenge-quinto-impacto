import { Box, Button, useDisclosure } from '@chakra-ui/react'
import ModalTemplate from '../Basics/ModalTemplate'
import Search from '../Basics/Search'
import useClassrooms from '../ClassroomsIndex/hooks/useClassrooms'
import { useState } from 'react'

const AddClass = ({ handleSubmit }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { handleDescription, classrooms } = useClassrooms()
    const [currentSelected, setCurrentSelected] = useState()

    const handleConfirm = () => {
        if (currentSelected) {
            handleSubmit(currentSelected)
            onClose()
        }
    }

    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>Añadir clase</Button>
            <ModalTemplate title='Añadir clase' handleClose={onClose} isOpen={isOpen} handleConfirm={handleConfirm}>
                <Box display='flex' flexDirection='column' gap='0.5rem'>
                    <Search/>
                    <Box display='flex' flexDirection='column' gap='0.5rem'>
                        {
                            currentSelected
                            ? <Box borderWidth='1px' borderRadius='lg' p='0.5rem 1rem' background='blue.500' color='white'>
                                {classrooms.find(classroom => classroom.id = currentSelected).description}
                            </Box>
                            : classrooms.map(classroom =>
                                <Box key={classroom.id} borderWidth='1px' borderRadius='lg' p='0.5rem 1rem' _hover={{ background: 'blue.500', color: 'white' }} onClick={() => setCurrentSelected(classroom.id)}>
                                    {classroom.description}
                                </Box>
                            )
                        }
                    </Box>
                </Box>
            </ModalTemplate>
        </>
    )
}

export default AddClass