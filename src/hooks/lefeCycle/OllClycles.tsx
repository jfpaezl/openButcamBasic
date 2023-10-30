/**
 * 
 */

import { useEffect } from "react"



export default function OllClycles() {
   
    useEffect(() => {
        
        console.log('Componente va a aparecer');
        const intevrvalo = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Comportamiento cada segundo')
        }, 1000);

        return () => {
            document.title = `Tiempo detenido`
            console.log('Omponente va a desaparecer')
            clearInterval(intevrvalo)
        }
    }
    , [])
  return (
    <div>OllClycles</div>
  )
}
