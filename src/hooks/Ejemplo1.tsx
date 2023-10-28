/**
 * Ejemplo de uso de un hook useState
 * 
 * Crear un componente de tipo funcion y acceder a un estado
 * privado atraves de un hook y, ademas, modificarlo
 */

import { useState } from 'react'

function Ejemplo1() {
    //Valor inicial para un contador
    const ValorInicial = 0

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Juan',
        Email: 'juanejemlo@gmail.com'
    }

    /**
     * Queremos que el valorInicial y PersonaInicial sean parte del estado inicial del 
     * componente para asi poder gestionar su cambio y que éste se vea reflejado en el
     * 
     * estuctura 
     * const [nombreVarable, FuncionParaCambiar] = useState(estadoInicial)
     */

    const [contador, setContador] = useState(ValorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /**
     * Funcion para actualizar el estado que contiene el contador
     */
    function incrementar() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona({
            nombre: 'Pedro',
            Email: 'pedro@email.com'
        })
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h4>Email: {persona.Email}</h4>
            {/* bloque de botones para actualizar el estado */}
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    )
}



export default Ejemplo1
