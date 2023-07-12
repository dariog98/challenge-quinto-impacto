import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Box, InputGroup, InputLeftElement, InputRightElement, Input, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef } from 'react'

const Search = ({ handleSearch }) => {
    const searchValue = useRef()

    const handleClick = () => {
        handleSearch(searchValue.current.value)
    }

    return (
        <InputGroup flexGrow='1'>
            <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.500'/>
            </InputLeftElement>
            <Input ref={searchValue} type='text' placeholder='Buscar' />
            <InputRightElement width='4.5rem'>
                <Button onClick={handleClick} borderTopLeftRadius='0' borderBottomLeftRadius='0'>Buscar</Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default Search