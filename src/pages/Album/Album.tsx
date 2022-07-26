import { useEffect, useState } from "react"
import { Photos } from "../../types/types"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"

export const Album = () => {
    const [photos, setPhotos] = useState<Photos[]>([])

    useEffect(() => {
        PhotosRender()
    }, [])

    const PhotosRender = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
    }


    return (
       <div>
        <button>Voltar</button>
            { photos.map( item => 
            <div>
                <img src={item.thumbnailUrl} />
            </div> ) }
       </div> 
    )
}