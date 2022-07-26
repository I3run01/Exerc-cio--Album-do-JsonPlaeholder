import { useNavigate } from "react-router-dom"

export const Nav = () => {
    const navigate = useNavigate()

    const handleBackButton = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Galeria de fotos</h1>
            <hr />
            <button onClick={handleBackButton}>Voltar</button>
        </div>
    )
}