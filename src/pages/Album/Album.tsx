import { useEffect, useState } from "react"
import { Photos } from "../../types/types"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"
import { useNavigate, useParams } from "react-router-dom"

export const Album = () => {
    const [photos, setPhotos] = useState<Photos[]>([])
    const params:number = Number(useParams().index)
    const navigate = useNavigate()

    useEffect(() => {
        PhotosRender()
    }, [])

    const PhotosRender = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
    }

    const handleBackButton = () => {
        navigate(-1)
    }




    return (
       <div>
        <button onClick={handleBackButton}>Voltar</button>
            { photos.map( item => 
            <div>
                <img src={item.thumbnailUrl} />
            </div> ) }
       </div> 
    )
}