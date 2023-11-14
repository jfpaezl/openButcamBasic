import Child from "../pure/child";

export default function Father() {
    function showMessaje( text: string) {    
        alert('Click en el boton: ' + text);
    }

    return (
        <div>
            <Child 
                name = 'Pedro'
                send = {showMessaje}
            />
        </div>
    )
}