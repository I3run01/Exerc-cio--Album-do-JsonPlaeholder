import { useEffect, useState } from "react"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"
import { Photos } from "../../types/types"

export const Photo = () => {
    const [photos, setPhotos] = useState<Photos[]>([])
    const [img, setImg] = useState()

    useEffect(() => {
        renderPhoto()
    }, [])

    const renderPhoto = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
    }

    return (
        <div>

        </div>
    )
}