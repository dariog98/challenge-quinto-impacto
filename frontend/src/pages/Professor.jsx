import { useParams } from 'react-router-dom'
import useProfessor from './Professor/hooks/useProfessor'
import { faSchool, faChalkboardTeacher, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Box, Button, useDisclosure } from '@chakra-ui/react'
import Subtitle from './Basics/Subtitle'
import ItemBox from './Basics/ItemBox'
import Form from './Basics/Form'
import { ROUTES } from '../constants/Routes'
import AddClass from './Professor/AddClass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RemoveClass from './Professor/RemoveClass'
import { useState } from 'react'

const Professor = () => {
    const params = useParams()
    const { loading, professor, editProfessor, addClassroom, removeClassroom } = useProfessor(params.id)
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
                professor
                ? <>
                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faChalkboardTeacher} title='Datos del profesor'/>
                        <Form defaultValues={professor} inputs={inputs} handleAction={editProfessor}/>
                    </Box>

                    <RemoveClass handleSubmit={removeClassroom} handleClose={onClose} idClassroom={currentSelected} isOpen={isOpen}/>

                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faSchool} title='Clases'><AddClass handleSubmit={addClassroom}/></Subtitle>
                        <Box display='flex' flexDirection='column' gap='1rem'>
                            {
                                professor.classrooms.length
                                ? professor.classrooms.map(classroom =>
                                    <Box display='flex' gap='1rem'>
                                        <ItemBox key={classroom.id} title={classroom.description} route={`${ROUTES.Classrooms}/${classroom.id}`}/>
                                        <Button h='inherit' w='4rem' colorScheme='red' variant='outline' onClick={() => handleRemoveClick(classroom.id)}>
                                            <FontAwesomeIcon icon={faXmark}/>
                                        </Button>
                                    </Box>    
                                )
                                : <ItemBox title='No hay clases asignadas'/>
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

export default Professor