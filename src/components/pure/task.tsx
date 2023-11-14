import { useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

interface TaskComponentProps {
    task: Task;
    complete: (task: Task)=>void;
    deleteTask: (task: Task)=>void;
}


const TaskComponent: React.FC<TaskComponentProps> = ({ task, complete, deleteTask}) => {

    useEffect(() => {
        // console.log('Modificacion de tareas');
        return () => {
            // console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);
        
    /**
     * Function that returns a badge with the level of the task
     */
    const taskLeavelBadge = ()=>{
        switch (task.level) {
            case LEVELS.NORMAL:
                return <h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>;
            case LEVELS.URGENTE:
                return <h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>;
            case LEVELS.BLOCKING:
                return <h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>;
            default:
                break;
        }
    }

    /**
     * Function that returns a icon with the status of the task
     */
    const taskIconCompleted = ()=>{ 
        return task.completed ? 
        <i className='bi-toggle-on' onClick={()=>complete(task)} style={{color: 'green', fontSize: '20px', cursor: 'pointer'}}></i> : 
        <i className='bi-toggle-off' onClick={()=>complete(task)} style={{color: 'grey', fontSize: '20px', cursor: 'pointer'}}></i>
    }
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='aling-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='aling-middle'>
                {taskLeavelBadge()}
            </td>
            <td className='aling-middle'>
                {taskIconCompleted()}
                <i className='bi-trash' onClick={()=> deleteTask(task)} style={{color: 'tomato', fontSize: '20px', cursor: 'pointer'}}></i>
            </td>
        </tr>
    );
};


export default TaskComponent;
