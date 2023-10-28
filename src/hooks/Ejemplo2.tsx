/**
 * Ejemplo de uso de:
 * - useState()
 * - useEffect()
 * - useRef()
 */

import { useEffect, useState, useRef } from "react";


export default function Ejemplo2() {
    // Vamos a crear dos contadores distintos 
    // cada uno en un estado diferente

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Vamos a crear una referencia a un elemento del DOM
    const ref = useRef<HTMLHeadingElement>(null);

    function incrementar1() {
        setCount1(count1 + 1);
    }
    function incrementar2() {
        setCount2(count2 + 1);
    }
    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso1: Ejecutar siempre un snippet de codigo
     * cadaves que haya cun cambio en el estado del componente
     * se ejecuta el useEffect
     */
    // useEffect(() => {
    //     console.log("Cambio en el estado del componente");
    //     console.log("Mostrando refencia al elemento del DOM");
    //     console.log(ref);

    // });

    /**
     * ? Caso2: Ejecutar Solo cuando cambie contador 1
     * 
     */

    // useEffect(() => {
    //     console.log("Cambio en el estado del contador 1");
    //     console.log("Mostrando refencia al elemento del DOM");
    //     console.log(ref);
    // }, [count1]);

    /**
     * ? Caso3: Ejecutar Solo cuando cambie contador 1 o contador 2
     * 
     */

    useEffect(() => {
        console.log("Cambio en el estado del contador 1 o contador2");
        console.log("Mostrando refencia al elemento del DOM");
        console.log(ref);
    }, [count1, count2]);
    return (
        <div>
            <h1> *** Ejemplos de useEstate(), useEfect() y useRef() ***</h1>
            <h2>Contador1: {count1}</h2>
            <h2>Contador2: {count2}</h2>
            {/**Elemento referenciado */}
            <h4 ref={ref}>
                Ejemplo de elemento referenciado
            </h4>
            {/** Botones para actualizar el estado */}
            <div>
                <button onClick={incrementar1}>Incrementar 1</button>
                <button onClick={incrementar2}>Incrementar 2</button>
            </div>
        </div>
    );
}