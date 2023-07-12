import { useParams } from 'react-router-dom'
import useProfessor from './Professor/hooks/useProfessor'
import { faSchool, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@chakra-ui/react'
import Subtitle from './Basics/Subtitle'
import ItemBox from './Basics/ItemBox'
import Form from './Basics/Form'
import { ROUTES } from '../constants/Routes'

const Professor = () => {
    const params = useParams()
    const { loading, professor, editProfessor } = useProfessor(params.id)

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
                professor
                ? <>
                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faChalkboardTeacher} title='Datos del profesor'/>
                        <Form defaultValues={professor} labels={labels} handleAction={editProfessor}/>
                    </Box>

                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faSchool} title='Clases'/>
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