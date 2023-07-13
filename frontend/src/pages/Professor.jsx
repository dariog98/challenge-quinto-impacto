import { ROUTES } from '../constants/Routes'
import { useParams } from 'react-router-dom'
import { faSchool, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Box, Button } from '@chakra-ui/react'
import Subtitle from './Basics/Subtitle'
import ItemBox from './Basics/ItemBox'
import Form from './Basics/Form'
import AddClass from './Professor/AddClass'
import RemoveClass from './Professor/RemoveClass'
import RemovableItem from './Basics/RemovableItem'
import useProfessor from './Professor/hooks/useProfessor'
import useRemoveClass from './Professor/hooks/useRemoveClass'
import { useState } from 'react'

const Professor = () => {
    const params = useParams()
    const { loading, professor, editProfessor, addClassroom, removeClassroom } = useProfessor(params.id)
    const { isOpen, handleOpen, handleClose, currentSelected } = useRemoveClass()
    const [isEditMode, setEditMode] = useState()

    const inputs = [
        { name: 'surnames', label: 'Apellidos', type: 'text' },
        { name: 'names', label: 'Nombres', type: 'text' },
        { name: 'dni', label: 'DNI', type: 'number' },
        { name: 'birthdate', label: 'Fecha de Nacimiento', type: 'date' },
        { name: 'phone', label: 'Teléfono', type: 'text' },
        { name: 'address', label: 'Dirección', type: 'text' },
    ]

    return (
        <Box className='d-flex flex-column gap-1'>
            {
                professor
                ? <>
                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faChalkboardTeacher} title='Datos del profesor'>
                            <Button display={isEditMode ? 'none' : 'inherit'} colorScheme='teal' onClick={() => setEditMode(true)}>Editar</Button>
                        </Subtitle>
                        <Form defaultValues={professor} inputs={inputs} handleAction={editProfessor} isEditMode={isEditMode} handleCloseEditMode={() => setEditMode(false)}/>
                    </Box>

                    <RemoveClass handleSubmit={removeClassroom} handleClose={handleClose} idClassroom={currentSelected} isOpen={isOpen}/>

                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faSchool} title='Clases'><AddClass handleSubmit={addClassroom}/></Subtitle>
                        <Box display='flex' flexDirection='column' gap='1rem'>
                            {
                                professor.classrooms.length
                                ? professor.classrooms.map(classroom =>
                                    <RemovableItem
                                        key={classroom.id}
                                        title={classroom.description}
                                        route={`${ROUTES.Classrooms}/${classroom.id}`}
                                        handleRemove={() => handleOpen(classroom.id)}
                                    />  
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