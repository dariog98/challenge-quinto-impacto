import { useEffect, useState } from "react"
import { APIROUTES } from "../../../constants/ApiRoutes"

const useProfessors = () => {
    const [loading, setLoading] = useState(false)
    const [professors, setProfessors] = useState([])

    const getAllProfessors = async () => {
        try {
            setLoading(true)
            const response = await fetch(APIROUTES.Professors)
            const result = await response.json()
            setProfessors(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllProfessors()
    }, [])

    return {
        loading,
        professors
    }
}

export default useProfessors