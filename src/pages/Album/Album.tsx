import { useEffect, useState } from "react"
import { Photos } from "../../types/types"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"
import { useParams } from "react-router-dom"

export const Album = () => {
    const [photos, setPhotos] = useState<Photos[]>([])
    const params:number = Number(useParams().index)

    useEffect(() => {
        PhotosRender()
    }, [])

    const PhotosRender = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
    }




    return (
       <div>
        <button >Voltar</button>
        <h1>{  }</h1>
            { photos.map( item => 
            <div>
                <img src={item.thumbnailUrl} />
            </div> ) }
       </div> 
    )
}