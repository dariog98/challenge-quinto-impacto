import { useEffect, useState } from 'react'
import { APIROUTES } from '../../../constants/ApiRoutes'

const useClassrooms = () => {
    const [loading, setLoading] = useState(false)
    const [classrooms, setClassrooms] = useState([])

    const getAllClassrooms = async () => {
        try {
            setLoading(true)
            const response = await fetch(APIROUTES.Classrooms)
            const result = await response.json()
            setClassrooms(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllClassrooms()
    }, [])

    return {
        loading,
        classrooms
    }
}

export default useClassrooms