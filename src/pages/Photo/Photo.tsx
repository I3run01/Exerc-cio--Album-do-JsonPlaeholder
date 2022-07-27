import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"
import { Photos } from "../../types/types"

export const Photo = () => {
    const [photos, setPhotos] = useState<Photos[]>([])
    const [img, setImg] = useState('#')
    const [title, setTitle] = useState('loading...')
    const params:number = Number(useParams().index)
    const navigate = useNavigate()

    useEffect(() => {
        renderPhoto()
    })

    const renderPhoto = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
        setImg(photos[params].url)
        setTitle(photos[params].title)
    }

    const handleBackButton = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleBackButton}>Voltar</button><br />
            <img src={img} />
        </div>
    )
}