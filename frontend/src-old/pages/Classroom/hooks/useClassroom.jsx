import { useEffect, useState } from "react"
import { APIROUTES } from "../../../constants/ApiRoutes"

const useClassroom = (idClassroom) => {
    const [loading, setLoading] = useState(false)
    const [classroom, setClassroom] = useState()

    const getClassroom = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${APIROUTES.Classrooms}/${idClassroom}`)
            const result = await response.json()
            setClassroom(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getClassroom()
    }, [idClassroom])

    return {
        loading,
        classroom
    }
}

export default useClassroom