import { useEffect, useState } from "react"
import { APIROUTES } from "../../../constants/ApiRoutes"
import { useUserContext } from "../../Basics/UserProvider"

const useClassrooms = () => {
    const [loading, setLoading] = useState(false)
    const [classrooms, setClassrooms] = useState([])
    const [searchDescription, setSearchDescription] = useState('')
    const { user } = useUserContext()

    const getAllClassrooms = async () => {
        try {
            setLoading(true)

            const config = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authentication": `Bearer ${user.token}`
                }
            }

            const response = await fetch(`${APIROUTES.Classrooms}?description=${searchDescription}`, config)
            console.log(response)
            if (response.status === 200) {
                const result = await response.json()
                if (result.data) {
                    setClassrooms(result.data)
                }
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllClassrooms()
    }, [searchDescription])

    return {
        loading,
        classrooms,
        handleDescription: setSearchDescription
    }
}

export default useClassrooms