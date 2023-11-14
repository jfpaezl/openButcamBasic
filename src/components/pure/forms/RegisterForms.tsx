/**
 * El componente que va a contener un formulario
 * para autenticacion de usuarios
 */

import { useState } from "react";

export const RegisterForm = () => {
    //estado del componente
    const initialData = [
        {
            user: "",
            name: "",
            email: "",
            password: ""
        }
    ]
    const [data, setData] = useState(initialData)
    return (
        <div>
            <h1>Formulario de register</h1>
        </div>
    )
}