import { ROUTES } from './constants/Routes'
import { createBrowserRouter } from 'react-router-dom'
import ClassroomsIndex from './pages/ClassroomsIndex'
import ProfessorsIndex from './pages/ProfessorsIndex'
import WebContainer from './pages/Basics/WebContainer'
import StudentsIndex from './pages/StudentsIndex'
import Classroom from './pages/Classroom'
import Student from './pages/Student'
import Professor from './pages/Professor'
import Login from './pages/Login'
import Register from './pages/Register'
import ProtectedUserRoute from './pages/Basics/ProtectedUserRoute'
import Home from './pages/Home'

/*
const router = createBrowserRouter([
    {
        path: ROUTES.Home,
        element: <Login/>,
    },
    {
        path: ROUTES.Register,
        element: <Register/>,
    },
    {
        path: ROUTES.Classrooms,
        element: <WebContainer><ClassroomsIndex/></WebContainer>,
    },
    {
        path: ROUTES.Professors,
        element: <WebContainer><ProfessorsIndex/></WebContainer>,
    },
    {
        path: ROUTES.Students,
        element: <WebContainer><StudentsIndex/></WebContainer>,
    },
    {
        path: `${ROUTES.Classrooms}/:id`,
        element: <WebContainer><Classroom/></WebContainer>,
    },
    {
        path: `${ROUTES.Students}/:id`,
        element: <WebContainer><Student/></WebContainer>,
    },
    {
        path: `${ROUTES.Professors}/:id`,
        element: <WebContainer><Professor/></WebContainer>,
    }
])
*/

const router = createBrowserRouter([
    {
        path: ROUTES.Home,
        //element: <Home/>,
        children: [
            {
                element: <ProtectedUserRoute/>,
                children: [
                    {
                        path: ROUTES.Classrooms,
                        element: <WebContainer><ClassroomsIndex/></WebContainer>,
                    },
                    {
                        path: ROUTES.Professors,
                        element: <WebContainer><ProfessorsIndex/></WebContainer>,
                    },
                    {
                        path: ROUTES.Students,
                        element: <WebContainer><StudentsIndex/></WebContainer>,
                    },
                    {
                        path: `${ROUTES.Classrooms}/:id`,
                        element: <WebContainer><Classroom/></WebContainer>,
                    },
                    {
                        path: `${ROUTES.Students}/:id`,
                        element: <WebContainer><Student/></WebContainer>,
                    },
                    {
                        path: `${ROUTES.Professors}/:id`,
                        element: <WebContainer><Professor/></WebContainer>,
                    }
                ]
            },
            {
                path: ROUTES.Login,
                element: <Login/>,
            },
            {
                path: ROUTES.Register,
                element: <Register/>,
            }
        ]
    }
])

export { router }