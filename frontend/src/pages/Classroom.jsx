import { useParams } from 'react-router-dom'
import useClassroom from './Classroom/hooks/useClassroom'
import { faSchool, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Box, Stack, InputGroup, InputLeftAddon, Input, Select } from '@chakra-ui/react'
import { ROUTES } from '../constants/Routes'
import ItemBox from './Basics/ItemBox'
import Subtitle from './Basics/Subtitle'
import useClasstimes from './Classroom/hooks/useClasstimes'

const Classroom = () => {
    const params = useParams()
    const { loading, classroom } = useClassroom(params.id)
    const { classtimes } = useClasstimes()

    return (
        <Box className='d-flex flex-column gap-1'>
            {
                classroom
                ? <>
                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faSchool} title='Datos de la clase'/>

                        <Box>
                            <Stack spacing='0.5rem'>
                                <InputGroup>
                                    <InputLeftAddon children='Descripción' />
                                    <Input type='text' placeholder='' value={classroom.description} />
                                </InputGroup>

                                <InputGroup>
                                    <InputLeftAddon children='Turno' />
                                    <Select defaultValue={classroom.classtime.id} borderTopLeftRadius='0' borderBottomLeftRadius='0'>
                                        {
                                            classtimes.map(classtime =>
                                                <option key={classtime.id} value={classtime.id}>{classtime.description}</option>
                                            )
                                        }
                                    </Select>
                                </InputGroup>
                            </Stack>
                        </Box>
                    </Box>

                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faChalkboardTeacher} title='Profesor'/>
                        <Box display='flex' flexDirection='column' gap='1rem'>
                            {
                                classroom.professor
                                ? <ItemBox title={`${classroom.professor.surnames} ${classroom.professor.names}`} route={`${ROUTES.Professors}/${classroom.professor.id}`}/>
                                : <ItemBox title='Profesor no asignado'/>
                            }
                        </Box>
                    </Box>

                    <Box display='flex' flexDirection='column' gap='1rem'>
                        <Subtitle icon={faUsers} title='Alumnos'/>
                        <Box display='flex' flexDirection='column' gap='1rem'>
                            {
                                classroom.students.map(student =>
                                    <ItemBox key={student.id} title={`${student.surnames} ${student.names}`} route={`${ROUTES.Students}/${student.id}`}/>
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

export default Classroom