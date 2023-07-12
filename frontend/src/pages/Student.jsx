import { useParams } from 'react-router-dom'
import useStudent from './Student/hooks/useStudent'
import { faSchool, faUser } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@chakra-ui/react'
import ItemBox from './Basics/ItemBox'
import Subtitle from './Basics/Subtitle'
import Form from './Basics/Form'
import { ROUTES } from '../constants/Routes'

const Student = () => {
    const params = useParams()
    const { loading, student, editStudent } = useStudent(params.id)
    const labels = [
        { name: "surnames", description: "Apellidos" },
        { name: "names", description: "Nombres" },
        { name: "dni", description: "DNI" },
        { name: "birthdate", description: "Fecha de Nacimiento" },
        { name: "phone", description: "Teléfono" },
        { name: "address", description: "Dirección" },
    ]

    return (
        <Box className='d-flex flex-column gap-1'>
            {
                student
                ? <>
                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faUser} title='Datos del alumno'/>
                        <Form defaultValues={student} labels={labels} handleAction={editStudent}/>
                    </Box>

                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faSchool} title='Clases'/>
                        <Box display='flex' flexDirection='column' gap='1rem'>
                            {
                                student.classrooms.map(classroom =>
                                    <ItemBox key={classroom.id} title={classroom.description} route={`${ROUTES.Classrooms}/${classroom.id}`}/>
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