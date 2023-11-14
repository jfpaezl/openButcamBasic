import { useEffect, useState } from "react"
import { LEVELS } from "../../models/levels.enum"
import { Task } from "../../models/task.class"
import TaskComponent from "../pure/task"
import TaskForm from "../pure/forms/TaskForm"

export const TaskListComponent = () => {

    const defaultTask1 = new Task('example 1', 'description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('example 2', 'description 2', false, LEVELS.URGENTE)
    const defaultTask3 = new Task('example 3', 'description 3', false, LEVELS.BLOCKING)
    //estado del componente
    const [tasks, setTask] = useState<Task[]>([defaultTask1, defaultTask2, defaultTask3])
    // const [leading, setLoading] = useState(true)

    //control del ciclo de vida del componente
    useEffect(() => {
        // console.log('Modificacion de tareas')
        // setLoading(false)
        // return () => {
        //     console.log('Comportamiento antes de que el componente sea eliminado del DOM')
        // }
    }, [])
    const completeTask = (task: Task) => {
        // console.log('Complete this Task: ', task)
        const index = tasks.indexOf(task)
        const newTasks = [...tasks]
        newTasks[index].completed = !newTasks[index].completed

        // we update the state of the component with the new tasks
        setTask(newTasks)
    }

    const deleteTask = (task: Task) => {
        // console.log('Delete this Task: ', task)
        const index = tasks.indexOf(task)
        const newTasks = [...tasks]
        newTasks.splice(index, 1)

        // we update the state of the component with the new tasks
        setTask(newTasks)
    }

    const addTask = (task: Task) => {
        // console.log('Add this Task: ', task)
        const newTasks = [...tasks, task]
        setTask(newTasks)
    }
    const changeCompleted = (id: boolean) => {
        console.log('Cambiando estado de la tarea con id: ', id)
    }

    changeCompleted(true)
    return (
        <div>
            <div className="col-12">
                <div className="card">
                    <div className="caed-header p-3">
                        <h5>Your Task</h5>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '500px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return <TaskComponent key={index} task={task} complete={completeTask} deleteTask={deleteTask}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <h1>Tu tarea: </h1>
            </div>
            <TaskForm add={addTask}/>
            {/** TODO: Aplicar un for/map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask} /> */}
        </div>
    )
}


export default TaskListComponent