import { useParams } from 'react-router-dom'
import useProfessor from './Professor/hooks/useProfessor'
import { faSchool, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@chakra-ui/react'
import Subtitle from './Basics/Subtitle'
import ItemBox from './Basics/ItemBox'
import Form from './Basics/Form'
import { ROUTES } from '../constants/Routes'
import AddClass from './Professor/AddClass'

const Professor = () => {
    const params = useParams()
    const { loading, professor, editProfessor, addClassroom } = useProfessor(params.id)
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
                        <Subtitle icon={faChalkboardTeacher} title='Datos del profesor'/>
                        <Form defaultValues={professor} inputs={inputs} handleAction={editProfessor}/>
                    </Box>

                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faSchool} title='Clases'><AddClass handleSubmit={addClassroom}/></Subtitle>
                        <Box display='flex' flexDirection='column' gap='1rem'>
                            {
                                professor.classrooms.length
                                ? professor.classrooms.map(classroom =>
                                    <ItemBox key={classroom.id} title={classroom.description} route={`${ROUTES.Classrooms}/${classroom.id}`}/>
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