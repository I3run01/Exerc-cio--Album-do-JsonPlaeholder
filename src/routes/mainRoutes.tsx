import {useRoutes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Album } from "../pages/Album/Album"
import { Photo } from "../pages/Photo/Photo"

export const MainRoutes = () => {
    
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/album/:index', element: <Album/>},
        {path: '/photo/:index', element: <Photo/>}
    ])
}