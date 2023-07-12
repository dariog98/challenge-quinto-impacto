import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='input-group'>
                <label className='label'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'inherit' }}/>
                </label>
                <input className='input' type='text' placeholder='Buscar'/>
            </div>
        </div>
    )
}

export default Search