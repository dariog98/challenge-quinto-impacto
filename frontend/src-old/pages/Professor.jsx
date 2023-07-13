import { useParams } from 'react-router-dom'
import useProfessor from './Professor/hooks/useProfessor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faUser } from '@fortawesome/free-solid-svg-icons'

const Professor = () => {
    const params = useParams()
    const { loading, professor } = useProfessor(params.id)

    return (
        <div className='d-flex flex-column gap-1'>
            {
                professor
                ? <>
                    <div className=''>
                        <div className='d-flex gap-1 align-items-center'>
                            <FontAwesomeIcon icon={faUser} className='title-icon'/>
                            <div>
                                <div className='title'>{`${professor.surnames} ${professor.names}`}</div>
                                <div className='d-flex gap-05'>
                                    <label>DNI</label>
                                    <div>{professor.dni}</div>
                                </div>
                                <div className='d-flex gap-05'>
                                    <label>Teléfono</label>
                                    <div>{professor.phone}</div>
                                </div>
                                <div className='d-flex gap-05'>
                                    <label>Fecha de nacimiento</label>
                                    <div>{professor.birthdate}</div>
                                </div>
                                <div className='d-flex gap-05'>
                                    <label>Dirección</label>
                                    <div>{professor.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='d-flex gap-1 align-items-center subtitle'>
                            <FontAwesomeIcon icon={faSchool} className='subtitle-icon'/>
                            <div>Clases</div>
                        </div>
                        <div className='d-flex flex-column gap-1'>
                            {
                                professor.classrooms.map(classroom =>
                                    <div key={classroom.id} className='d-flex flex-column gap-05'>
                                        <div>
                                            {classroom.description}
                                        </div>
                                    </div>
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

export default Professor