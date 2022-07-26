import {useRoutes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Album } from "../pages/Album/Album"

export const MainRoutes = () => {
    
    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/album/:index', element: <Album/>}
    ])
}