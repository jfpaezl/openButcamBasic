import { LEVELS } from "../../models/levels.enum"
import { Task } from "../../models/task.class"
import TaskComponent from "../pure/task"

export const TaskListComponent = () =>{

    const defaultTask = new Task('example', 'Default description', false, LEVELS.NORMAL)

    const changeState = (id: boolean) => {
        console.log('Cambiando estado de la tarea con id: ', id)
    }

    changeState(true)
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