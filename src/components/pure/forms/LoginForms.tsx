/**
 * El componente que va a contener un formulario
 * para autenticacion de usuarios
 */

import { useState } from "react";

export const LoginForm = () => {
    //estado del componente
    const initialCredentials = [
        {
            user: "",
            password: ""
        }
    ]
    const [credential, setCredential] = useState(initialCredentials)
    return (
        <div>
            <h1>Formulario de login</h1>
        </div>
    )
}