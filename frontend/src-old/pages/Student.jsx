import { useParams } from 'react-router-dom'
import useStudent from './Student/hooks/useStudent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/Routes'

const Student = () => {
    const params = useParams()
    const { loading, student } = useStudent(params.id)

    return (
        <div className='d-flex flex-column gap-1'>
            {
                student
                ? <>
                    <div className=''>
                        <div className='d-flex gap-1 align-items-center'>
                            <FontAwesomeIcon icon={faUser} className='title-icon'/>
                            <div>
                                <div className='title'>{`${student.surnames} ${student.names}`}</div>
                                <div className='d-flex gap-05'>
                                    <label>DNI</label>
                                    <div>{student.dni}</div>
                                </div>
                                <div className='d-flex gap-05'>
                                    <label>Teléfono</label>
                                    <div>{student.phone}</div>
                                </div>
                                <div className='d-flex gap-05'>
                                    <label>Fecha de nacimiento</label>
                                    <div>{student.birthdate}</div>
                                </div>
                                <div className='d-flex gap-05'>
                                    <label>Dirección</label>
                                    <div>{student.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex gap-1 align-items-center subtitle' style={{ padding: '1rem 2rem' }}>
                            <FontAwesomeIcon icon={faSchool} className='subtitle-icon'/>
                            <div>Clases</div>
                        </div>
                        <div className='d-flex flex-column gap-1'>
                            {
                                student.classrooms.map(classroom =>
                                    <Link to={`${ROUTES.Classrooms}/${classroom.id}`}key={classroom.id} className='d-flex flex-column gap-05 box'>
                                        <div>
                                            {classroom.description}
                                        </div>
                                        <div className='d-flex gap-05'>
                                            <label>Profesor</label>
                                            <div>{`${classroom.professor.surnames} ${classroom.professor.names}`}</div>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </>
                : <>
                </>
            }
        </div>
    )
}

export default Student