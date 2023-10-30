/**
 * Ejemplo de uso de metodo componente DidiUpdate
 * en componente tipo clase
 * uso de hook en componente tipo funcion
 */

import { Component, useEffect } from 'react'

export class DidUpdate extends Component {
    componentDidUpdate(): void {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }
    render() {
        return (
            <div><h1>DidUpdate</h1></div>
        )
    }
}

export function DidUpdateHook() {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    })
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    )
}
