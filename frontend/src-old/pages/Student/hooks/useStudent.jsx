import { useEffect, useState } from "react"
import { APIROUTES } from "../../../constants/ApiRoutes"

const useStudent = (idStudent) => {
    const [loading, setLoading] = useState(false)
    const [student, setStudent] = useState()

    const getStudent = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${APIROUTES.Students}/${idStudent}`)
            const result = await response.json()
            setStudent(result.data)
            setLoading(false)
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
        student
    }
}

export default useStudent