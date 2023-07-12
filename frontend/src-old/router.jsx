import { ROUTES } from "./constants/Routes"
import { createBrowserRouter } from 'react-router-dom'
import ClassroomsIndex from "./pages/ClassroomsIndex"
import ProfessorsIndex from "./pages/ProfessorsIndex"
import Container from "./pages/Basics/Container"
import StudentsIndex from './pages/StudentsIndex'
import Classroom from "./pages/Classroom"
import Student from "./pages/Student"

const router = createBrowserRouter([
    {
        path: ROUTES.Login,
        element: <Container/>,
    },
    {
        path: ROUTES.Home,
        element: <Container></Container>,
    },
    {
        path: ROUTES.Classrooms,
        element: <Container><ClassroomsIndex/></Container>,
    },
    {
        path: ROUTES.Professors,
        element: <Container><ProfessorsIndex/></Container>,
    },
    {
        path: ROUTES.Students,
        element: <Container><StudentsIndex/></Container>,
    },
    {
        path: `${ROUTES.Classrooms}/:id`,
        element: <Container><Classroom/></Container>,
    },
    {
        path: `${ROUTES.Students}/:id`,
        element: <Container><Student/></Container>,
    }
])

export { router }