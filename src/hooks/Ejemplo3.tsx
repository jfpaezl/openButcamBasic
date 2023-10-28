/**
 * Ejemplo hooks.
 * -useEstate()
 * -useContext()
 */

import React, { useState, useContext } from "react"

/**
 * 
 * @returns componente1
 * Dispone de un contecto que va a terner un valor 
 * que recibe del componente padre
 */
const miContexto = React.createContext({});
const Component1 = () => {
    // inicializamos un stado vacio que va a rellenarse con los
    // datos que nos lleguen del componente padre
    const state = useContext(miContexto);
    return(
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/**Pintamos el componente 2 */}
            <Component2/>
        </div>
    )
}
const Component2 = () => {

    const state = useContext(miContexto);

    return(
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    )
}

export default function MicomponenteConContexto() {
    const estadoInicial = {
        token: "123456789",
        sesion: 1
    }

    // creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);
    function actualizarSesion() {
        setSessionData({
            token: "987654321",
            sesion: sessionData.sesion + 1
        })
    }
    return (
        <miContexto.Provider value={sessionData}>
            {/** Todo lo que esta dentro puede leer los datos de sessionData 
             * ademas si se actualizan los compnentes de aqui tambien lo actualizan
            */}
            <h1>***Ejemplos de useState y useContext***</h1>
            <Component1 />
            <button onClick={actualizarSesion}>Actualizar sesion</button>
        </miContexto.Provider>
    )
}
