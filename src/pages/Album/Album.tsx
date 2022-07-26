import { useEffect, useState } from "react"
import { Photos } from "../../types/types"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"
import { useParams, Link } from "react-router-dom"
import { AlbumStyle } from './style'

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
       <AlbumStyle>
            
        <div id="container">
            { photos.map( item => 
                <div className="imgs">
                    <Link to={`/photo/${params}`}> <img src={item.thumbnailUrl} /> </Link>
                    
                </div> ) }
        </div>
            
       </AlbumStyle> 
    )
}