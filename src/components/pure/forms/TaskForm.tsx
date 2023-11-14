import PropTypes from 'prop-types'
import { useRef } from 'react'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

interface TaskFormProps {
    add: (task: Task)=>void;
}

export default function TaskForm({add}: TaskFormProps) {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL)

    const addTask = (e) => {
        e.preventDefault()
        const newTask = new Task(nameRef.current.value, descriptionRef.current.value, false, levelRef.current.value)
        add(newTask)
    }
    return (
        <form onSubmit={addTask} className='d-flex justyfy-content-center aling-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input type="text" ref={nameRef} id='inpoutName' className='form-control form-control-lg' required autoFocus placeholder='Task Name'/>
                <input type="text" ref={descriptionRef} id='inpoutDescription' className='form-control form-control-lg' required placeholder='Task Description'/>
                <label htmlFor="selectLeavel" className='sr-only'>
                    Priority
                </label>
                <select id="selectLeavel" ref={levelRef} defaultValue={LEVELS.NORMAL}>
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENTE}>Urgente</option>
                    <option value={LEVELS.BLOCKING}>Bloking</option>
                </select>
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
        </form>
    )
}

TaskForm.prototype = {
    add: PropTypes.func.isRequired
}