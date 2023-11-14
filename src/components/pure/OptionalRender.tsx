import { useState } from "react"

// Login Logouth Button

const LoginButton = ({loginAction}) => {
    return <button onClick={loginAction}>Login</button>
}

const LogoutButton = ({logoutAction}) => {
    return <button onClick={logoutAction}>Logout</button>
}

export default function OptionalRender() {
    const [access, setAccess] = useState(true)
    const [mesage, setmesage] = useState(0)

    const updateAccess = () => {
        setAccess(!access)
    }


    let OptionalButton
    if(access) {
        OptionalButton = <LoginButton loginAction={updateAccess}/>
    } else {
        OptionalButton = <LogoutButton logoutAction={updateAccess}/>
    }

    // unread mesages

    let aadMesages =() =>  {
        setmesage(mesage + 1)
    };

    return (
        <div>
            <h1>OptionalRender</h1>
            {/* optional Botton */}
            {OptionalButton}
            {/* N mesages unread */}
            {mesage > 0 && <h2>Tienes {mesage} mensajes sin leer</h2>}
            {mesage === 0 && <h2>No tienes mensajes sin leer</h2>}
            <button onClick={aadMesages}>Añadir mensaje</button>
        </div>
    )
}
