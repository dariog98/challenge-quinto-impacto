import { useParams } from 'react-router-dom'
import useClassroom from './Classroom/hooks/useClassroom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ROUTES } from '../constants/Routes'
import { Link } from 'react-router-dom'

const Classroom = () => {
    const params = useParams()
    const { loading, classroom } = useClassroom(params.id)

    return (
        <div className='d-flex flex-column gap-1'>
            {
                classroom
                ? <>
                    <div className=''>
                        <div className='d-flex gap-1 align-items-center'>
                            <FontAwesomeIcon icon={faSchool} className='title-icon'/>
                            <div>
                                <div className='title'>{classroom.description}</div>
                                <div className=''>Mañana</div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='d-flex gap-1 align-items-center subtitle'>
                            <FontAwesomeIcon icon={faChalkboardTeacher} className='subtitle-icon'/>
                            <div>Profesor</div>
                        </div>
                        <div>
                            {
                                classroom.professor
                                ? <>
                                    <div className='d-flex flex-column gap-05 box'>
                                        <div>
                                            {`${classroom.professor.surnames} ${classroom.professor.names}`}
                                        </div>
                                        <div className='d-flex flex-wrap gap-1'>
                                            <div className='d-flex gap-05'>
                                                <label>DNI</label>
                                                <div>{classroom.professor.dni}</div>
                                            </div>
                                            <div className='d-flex gap-05'>
                                                <label>Teléfono</label>
                                                <div>{classroom.professor.phone}</div>
                                            </div>
                                            <div className='d-flex gap-05'>
                                                <label>Fecha de nacimiento</label>
                                                <div>{classroom.professor.birthdate}</div>
                                            </div>
                                        </div>
                                        {/*
                                        <div className='d-flex gap-05'>
                                            <label>Dirección</label>
                                            <div>{classroom.professor.address}</div>
                                        </div>
                                        */}
                                    </div>
                                </>
                                : <>
                                </>
                            }
                        </div>
                    </div>

                    <div>
                        <div className='d-flex gap-1 align-items-center subtitle'>
                            <FontAwesomeIcon icon={faUsers} className='subtitle-icon'/>
                            <div>Alumnos</div>
                        </div>
                        <div className='d-flex flex-column gap-1'>
                            {
                                classroom.students.map(student =>
                                    <Link to={`${ROUTES.Students}/${student.id}`} key={student.id} className='d-flex flex-column gap-05 box'>
                                        <div>
                                            {`${student.surnames} ${student.names}`}
                                        </div>
                                        <div className='d-flex flex-row flex-wrap gap-1'>
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

export default Classroom