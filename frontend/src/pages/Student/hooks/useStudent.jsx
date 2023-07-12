import { useEffect, useRef, useState } from "react"
import { APIROUTES } from "../../../constants/ApiRoutes"
import { useUserContext } from "../../Basics/UserProvider"

const useStudent = (idStudent) => {
    const [loading, setLoading] = useState(false)
    const [student, setStudent] = useState()
    const { user } = useUserContext()

    const getStudent = async () => {
        try {
            setLoading(true)

            const config = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authentication": `Bearer ${user.token}`
                }
            }

            const response = await fetch(`${APIROUTES.Students}/${idStudent}`, config)
            const result = await response.json()
            setStudent(result.data)
            //setForm(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const editStudent = async (data) => {
        try {
            //setLoading(true)
            const config = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authentication": `Bearer ${user.token}`
                },
                body: JSON.stringify(data)
            }

            const response = await fetch(`${APIROUTES.Students}/${idStudent}`, config)
            const result = await response.json()
            setStudent(result.data)
            //setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getStudent()
    }, [idStudent])

    return {
        loading,
        student,
        editStudent,
    }
}

export default useStudent