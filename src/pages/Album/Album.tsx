import { useEffect, useState } from "react"
import { Photos } from "../../types/types"
import { PlaceHolderApi } from "../../requireApi/JsonPlaceHolder"
import { useParams, Link, useNavigate } from "react-router-dom"
import { AlbumStyle } from './style'

export const Album = () => {
    const [photos, setPhotos] = useState<Photos[]>([])
    const [title, setTitle] = useState('')
    const params:number = Number(useParams().index)
    const navigate = useNavigate()

    useEffect(() => {
        PhotosRender()
    })

    const PhotosRender = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
        setTitle(photos[params].title)

    }

    const handleBackButton = () => {
        navigate(-1)
    }

    return (
       <AlbumStyle>
            <h1>{title}</h1>
            <button onClick={handleBackButton}>Voltar</button>
            {photos.length == 0 &&
                <h2>Loading</h2>
            }
            <div id="container">
                {photos.map( (item, index) => 
                    <div className="imgs">
                        <Link to={`/photo/${index}`}> <img src={item.thumbnailUrl} /> </Link>
                    </div> ) }
            </div>
       </AlbumStyle> 
    )
}