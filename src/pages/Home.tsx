import { useEffect, useState } from "react"
import { PlaceHolderApi } from "../requireApi/JsonPlaceHolder"
import { Photos } from "../types/types"
import { Link } from "react-router-dom"
import { HomeStyle } from "./style"

export const Home = () => {
    const [photos, setPhotos] = useState<Photos[]>([])

    useEffect(() => {
        Json()
    }, [])

    

    const Json = async () => {
        let json = await PlaceHolderApi.getAllPhotos()
        setPhotos(json)
    }
    

    return (
        <HomeStyle>
            { photos.map(item => 
            <div className="titles">
                <Link to='' className="link" > {item.title} </Link>
            </div> ) }
        </HomeStyle>
    )
}