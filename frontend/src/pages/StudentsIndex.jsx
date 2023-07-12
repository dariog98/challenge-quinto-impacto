import useStudents from "./StudentsIndex/hooks/useStudents"
import { ROUTES } from '../constants/Routes'
import { Box, Select, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import ItemBox from "./Basics/ItemBox"
import Search from "./Basics/Search"
import useClassrooms from "./ClassroomsIndex/hooks/useClassrooms"

const StudentsIndex = () => {
    const { students, handleName, handleClass } = useStudents()
    const { classrooms } = useClassrooms()

    return (
        <Box display='flex' flexDirection='column' gap='1rem'>
            <Box display='flex' gap='1rem'>
                <Search handleSearch={handleName}/>
                <InputGroup>
                    <InputLeftAddon children='Clase'/>
                    <Select borderTopLeftRadius='0' borderBottomLeftRadius='0' onChange={({ target }) => handleClass(target.value)}>
                        <option value=''>Ninguna</option>
                        {
                            classrooms.map(classroom =>
                                <option key={classroom.id} value={classroom.id}>{classroom.description}</option>
                            )
                        }
                    </Select>
                </InputGroup>
            </Box>


            {
                students.map(student => 
                    <ItemBox key={student.id} title={`${student.surnames} ${student.names}`} route={`${ROUTES.Students}/${student.id}`}/>
                )
            }
        </Box>
    )
}

export default StudentsIndex