import { useEffect, useState } from "react"
import { LEVELS } from "../../models/levels.enum"
import { Task } from "../../models/task.class"
import TaskComponent from "../pure/task"

export const TaskListComponent = () =>{

    const defaultTask = new Task('example', 'Default description', false, LEVELS.NORMAL)
    //estado del componente
    const [tasks, setTasks] = useState<Task[]>([defaultTask])

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Modificacion de tareas')
        return () => {
            console.log('Comportamiento antes de que el componente sea eliminado del DOM')
        }
    }, [])

    const changeCompleted = (id: boolean) => {
        console.log('Cambiando estado de la tarea con id: ', id)
    }

    changeCompleted(true)
    return(
        <div>
            <div>
                <h1>Tu tarea: </h1>
            </div>
            {/** TODO: Aplicar un for/map para renderizar una lista */}
            <TaskComponent task={defaultTask}/>
        </div>
    )
}


export default TaskListComponent