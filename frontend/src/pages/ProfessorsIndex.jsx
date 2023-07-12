import { ROUTES } from "../constants/Routes"
import useProfessors from "./ProfessorsIndex/hooks/useProfessors"
import ItemBox from "./Basics/ItemBox"
import { Box } from '@chakra-ui/react'
import Search from "./Basics/Search"

const ProfessorsIndex = () => {
    const { professors, handleName } = useProfessors()

    return (
        <Box display='flex' flexDirection='column' gap='1rem'>
            <Search handleSearch={handleName}/>
            {
                professors.map(professor => 
                    <ItemBox key={professor.id} title={`${professor.surnames} ${professor.names}`} route={`${ROUTES.Professors}/${professor.id}`}/>
                )
            }
        </Box>
    )
}

export default ProfessorsIndex