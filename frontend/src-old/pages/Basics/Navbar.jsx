import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ROUTES } from '../../constants/Routes'

const Button = ({ route, title, icon }) => {
    const location = useLocation()
    const isActive = location.pathname === route
    
    return (
        <Link to={route}>
            <div className={`d-flex flex-column align-items-center navbar-button ${isActive && 'active'}`}>
                <FontAwesomeIcon icon={icon} className='navbar-icon'/>
                <div>{title}</div>
            </div>
        </Link>
    )
}

const Navbar = () => {
    return (
        <div className='d-flex justify-content-center navbar' style={{ gap: '3rem' }}>
            <Button route={ROUTES.Classrooms} icon={faSchool} title='Clases'/>
            <Button route={ROUTES.Professors} icon={faChalkboardTeacher} title='Profesores'/>
            <Button route={ROUTES.Students} icon={faUsers} title='Alumnos'/>
        </div>
    )
}

export default Navbar