import axios from "axios"

export async function getPlats() {

    try {
        const res = await axios.get("/api/plats")

        return res.data.data
        
    } catch (error) {
        console.log(error)
    }
}

export async function getCategories() {

    try {
        const res = await axios.get("/api/categories")

        return res.data.data
        
    } catch (error) {
        console.log(error)
    }
}