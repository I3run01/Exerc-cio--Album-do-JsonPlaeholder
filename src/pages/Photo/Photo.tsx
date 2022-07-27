import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"
import { Photos } from "../../types/types"

export const Photo = () => {
    const [photos, setPhotos] = useState<Photos[]>([])
    const [img, setImg] = useState('#')
    const [title, setTitle] = useState('loading...')
    const params:number = Number(useParams().index)

    useEffect(() => {
        renderPhoto()
    })

    const renderPhoto = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
        setImg(photos[params].url)
        setTitle(photos[params].title)
    }

    return (
        <div>
            <h1>{title}</h1>
            <img src={img} />
        </div>
    )
}