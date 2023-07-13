import useProfessors from './ProfessorsIndex/hooks/useProfessors'

const ProfessorsIndex = () => {
    const { professors } = useProfessors()

    return (
        <div className='d-flex flex-column' style={{ gap: '1rem' }}>
            {
                professors.map(professor => 
                    <div key={professor.id} className='box d-flex flex-column justify-content-center gap-05'>
                        <div className='box-title'>{`${professor.surnames} ${professor.names}`}</div>
                        <div className='d-flex flex-column gap-05'>
                            <div className='d-flex gap-05'>
                                <label>DNI</label>
                                <div>{professor.dni}</div>
                            </div>
                            <div className='d-flex gap-05'>
                                <label>Fecha de nacimiento</label>
                                <div>{professor.birthdate}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProfessorsIndex