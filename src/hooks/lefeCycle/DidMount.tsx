/**
 * Ejemplo de uso del ciclo de vida de un componente funcional
 */

import { useEffect, Component } from "react"


// componente tipo clase
export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM')
    }

    render() {
        return (
            <div>DidMount</div>
        )
    }
}



//componente tipo funcion
export function DidMountHooks() {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM')
    }, [])

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    )
}