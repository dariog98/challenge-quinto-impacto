import { useParams } from 'react-router-dom'
import useStudent from './Student/hooks/useStudent'
import { faSchool, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Box, Button, useDisclosure } from '@chakra-ui/react'
import ItemBox from './Basics/ItemBox'
import Subtitle from './Basics/Subtitle'
import Form from './Basics/Form'
import { ROUTES } from '../constants/Routes'
import AddClass from './Professor/AddClass'
import RemoveClass from './Professor/RemoveClass'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Student = () => {
    const params = useParams()
    const { loading, student, editStudent, addClassroom, removeClassroom } = useStudent(params.id)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [currentSelected, setCurrentSelected] = useState()

    const inputs = [
        { name: 'surnames', label: 'Apellidos', type: 'text' },
        { name: 'names', label: 'Nombres', type: 'text' },
        { name: 'dni', label: 'DNI', type: 'number' },
        { name: 'birthdate', label: 'Fecha de Nacimiento', type: 'date' },
        { name: 'phone', label: 'Teléfono', type: 'text' },
        { name: 'address', label: 'Dirección', type: 'text' },
    ]

    const handleRemoveClick = (idClassroom) => {
        setCurrentSelected(idClassroom)
        onOpen()
    }

    return (
        <Box className='d-flex flex-column gap-1'>
            {
                student
                ? <>
                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faUser} title='Datos del alumno'/>
                        <Form defaultValues={student} inputs={inputs} handleAction={editStudent}/>
                    </Box>

                    <RemoveClass handleSubmit={removeClassroom} handleClose={onClose} idClassroom={currentSelected} isOpen={isOpen}/>

                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faSchool} title='Clases'><AddClass handleSubmit={addClassroom}/></Subtitle>
                        <Box display='flex' flexDirection='column' gap='1rem'>
                            {
                                student.classrooms.map(classroom =>
                                    <Box display='flex' gap='1rem'>
                                        <ItemBox key={classroom.id} title={classroom.description} route={`${ROUTES.Classrooms}/${classroom.id}`}/>
                                        <Button h='inherit' w='4rem' colorScheme='red' variant='outline' onClick={() => handleRemoveClick(classroom.id)}>
                                            <FontAwesomeIcon icon={faXmark}/>
                                        </Button>
                                    </Box>
                                )
                            }
                        </Box>
                    </Box>
                </>
                : <>
                </>
            }
        </Box>
    )
}

export default Student