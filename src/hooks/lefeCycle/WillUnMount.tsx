/**
 * Ejemplo  de uso del metodo WillUnMount
 * para componente clase 
 * y hook para componente funcional
 */

import { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount(): void {
        console.log('Comportamiento antes de que el componente sea eliminado del DOM')
    }
    render() {
        return (
            <div><h1>WillUnMount</h1></div>
        )
    }
}

export function WillUnMountHook() {
    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente sea eliminado del DOM')
        }
    }, [])
    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    )
}