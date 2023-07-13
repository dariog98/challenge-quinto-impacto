import { Link } from 'react-router-dom'
import useStudents from './StudentsIndex/hooks/useStudents'
import { ROUTES } from '../constants/Routes'

const StudentsIndex = () => {
    const { students } = useStudents()

    return (
        <div className='d-flex flex-column' style={{ gap: '1rem' }}>
            {
                students.map(student =>
                    <Link to={`${ROUTES.Students}/${student.id}`} key={student.id}>
                        <div className='box d-flex flex-column justify-content-center' style={{ gap: '0.5rem' }}>
                            <div className='box-title'>{`${student.surnames} ${student.names}`}</div>
                            <div className='d-flex' style={{ gap: '1rem' }}>
                                <div className='d-flex' style={{ gap: '0.5rem' }}>
                                    <label>Teléfono</label>
                                    <div>{student.phone}</div>
                                </div>
                                <div className='d-flex' style={{ gap: '0.5rem' }}>
                                    <label>Fecha de nacimiento</label>
                                    <div>{student.birthdate}</div>
                                </div>
                                <div className='d-flex' style={{ gap: '0.5rem' }}>
                                    <label>Dirección</label>
                                    <div>{student.address}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default StudentsIndex