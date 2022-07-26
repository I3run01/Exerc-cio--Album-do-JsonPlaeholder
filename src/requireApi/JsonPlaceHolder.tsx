import axios from "axios"

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const PlaceHolderApi = {
    getAllPhotos: async () => {
        let response = await http.get('/photos')
        return response.data
    },
}