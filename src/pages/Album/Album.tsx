import { useEffect, useState } from "react"
import { Photos } from "../../types/types"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"
import { useParams, Link } from "react-router-dom"
import { AlbumStyle } from './style'

export const Album = () => {
    const [photos, setPhotos] = useState<Photos[]>([])
    const [title, setTitle] = useState('')
    const params:number = Number(useParams().index)

    useEffect(() => {
        PhotosRender()
    })

    const PhotosRender = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
        setTitle(photos[params].title)

    }

    return (
       <AlbumStyle>
            <h1>{title}</h1> 
            <div id="container">
                {photos.map( (item, index) => 
                    <div className="imgs">
                        <Link to={`/photo/${index}`}> <img src={item.thumbnailUrl} /> </Link>
                    </div> ) }
            </div>
       </AlbumStyle> 
    )
}