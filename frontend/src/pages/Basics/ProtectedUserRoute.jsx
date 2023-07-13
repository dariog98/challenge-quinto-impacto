import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from './UserProvider'
import { ROUTES } from '../../constants/Routes'

const ProtectedUserRoute = () => {
    const { user } = useUserContext()

    console.log(user)

    if (!user) {
        return <Navigate to={ROUTES.Login} replace/>
    }

    return <Outlet/>
}

export default ProtectedUserRoute
  