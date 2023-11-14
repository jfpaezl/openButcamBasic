import { useRef } from "react";

interface ChildProps {
    name: string;
    send: (text: string) => void;
}


export default function Child({name = 'juan', send}: ChildProps) {
    const messageRef = useRef('');

    const pressButton = () => {   
        alert('Click en el boton');
    }

    const pressButtonParams = (name: string) => {
        alert(`Click en el boton ${name}`);
    }
    return (
        <div>
            <p onMouseOver={()=> console.log('on mouseOver')}>Child component</p>
            <button onClick={()=>{ console.log('Click en el boton')}}>Button1</button>
            <button onClick={pressButton}>Button2</button>
            <button onClick={()=>pressButtonParams(name)}>Button3</button>
            <input 
                type="text" 
                placeholder="insert a text" 
                onFocus={()=>{console.log('on focus');}}
                onChange={(e)=>{console.log(e.target.value)}}
                ref = {messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
        </div>
    )
}