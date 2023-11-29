import { useNavigate } from "react-router-dom";

export default function Error404() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Error 404</h1>
            <h2>Page Not Found</h2>
            <button onClick={()=>navigate('/')}> // Navigate to the home page
                Inicio
            </button>
        </div>
    )
}