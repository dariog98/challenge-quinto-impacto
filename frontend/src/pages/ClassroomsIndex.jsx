import { Box } from '@chakra-ui/react'
import useClassrooms from "./ClassroomsIndex/hooks/useClassrooms"
import { ROUTES } from '../constants/Routes'
import ItemBox from './Basics/ItemBox'
import Search from './Basics/Search'

const ClassroomsNotFound = () => {
    return (
        <div className='d-flex justify-content-center align-item'>
            <div>No hay clases registradas.</div>
        </div>
    )
}

const ClassroomsIndex = () => {
    const { classrooms, handleDescription } = useClassrooms()

    return (
        <Box display='flex' flexDirection='column' gap='1rem'>
            <Search handleSearch={handleDescription}/>
            {
                classrooms.length
                ? classrooms.map(classroom =>
                    <ItemBox title={classroom.description} route={`${ROUTES.Classrooms}/${classroom.id}`}/>
                )
                : <ClassroomsNotFound/>
            }
        </Box>
    )
}

export default ClassroomsIndex