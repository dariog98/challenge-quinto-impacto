import { useEffect, useState } from "react"
import { APIROUTES } from "../../../constants/ApiRoutes"

const useProfessor = (idProfessor) => {
    const [loading, setLoading] = useState(false)
    const [professor, setProfessor] = useState()

    const getProfessor = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${APIROUTES.Professors}/${idProfessor}`)
            const result = await response.json()
            setProfessor(result.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getProfessor()
    }, [idProfessor])

    return {
        loading,
        professor
    }
}

export default useProfessor