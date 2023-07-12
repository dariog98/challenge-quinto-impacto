import { Link } from 'react-router-dom'
import useClassrooms from "./ClassroomsIndex/hooks/useClassrooms"
import { ROUTES } from '../constants/Routes'

const ClassroomsNotFound = () => {
    return (
        <div className='d-flex justify-content-center align-item'>
            <div>No hay clases registradas.</div>
        </div>
    )
}

const ClassroomsIndex = () => {
    const { classrooms } = useClassrooms()

    return (
        <div className='d-flex flex-column' style={{ gap: '1rem' }}>
            {
                classrooms.length
                ? classrooms.map(classroom =>
                    <Link to={`${ROUTES.Classrooms}/${classroom.id}`}>
                        <div key={classroom.id} className='box d-flex flex-column justify-content-center' style={{ gap: '0.5rem' }}>
                            <div className='box-title'>{classroom.description}</div>
                            <div className='d-flex gap-05'>
                                <label>Turno</label>
                                <div>Mañana</div>
                            </div>
                            <div className='d-flex gap-05'>
                                <label>Profesor</label>
                                <div>{classroom.professor ? `${classroom.professor.surnames} ${classroom.professor.names}` : 'No asignado' }</div>
                            </div>
                        </div>
                    </Link>
                )
                : <ClassroomsNotFound/>
            }
        </div>
    )
}

export default ClassroomsIndex