import { useEffect, useState } from 'react'
import { APIROUTES } from '../../../constants/ApiRoutes'

const useStudents = () => {
    const [loading, setLoading] = useState(false)
    const [students, setStudents] = useState([])

    const getAllStudents = async () => {
        try {
            setLoading(true)
            const response = await fetch(APIROUTES.Students)
            const result = await response.json()
            setStudents(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllStudents()
    }, [])

    return {
        loading,
        students
    }
}

export default useStudents