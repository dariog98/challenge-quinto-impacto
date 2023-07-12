const APIBASE = 'http://localhost:8080'

const APIROUTES = {
    Classtimes: `${APIBASE}/api/classtimes`,
    Classrooms: `${APIBASE}/api/classrooms`,
    Professors: `${APIBASE}/api/professors`,
    Students: `${APIBASE}/api/students`,
    Login: `${APIBASE}/api/auth/login`,
    Register: `${APIBASE}/api/auth/register`,
}

export { APIROUTES }