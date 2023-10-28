import { Task } from '../../models/task.class';

interface TaskComponentProps {
    task: Task;
}


const TaskComponent: React.FC<TaskComponentProps> = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: {task.name}
            </h2>
            <h3>
                Descripccion: {task.description}
            </h3>
            <h4>
                Nivel: {task.level}
            </h4>
            <h5>
                Esta tarea esta: {task.completed ? 'Completada' : 'Incompleta'}
            </h5>
        </div>
    );
};


export default TaskComponent;
