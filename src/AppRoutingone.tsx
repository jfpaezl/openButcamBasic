import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import TaskPage from './pages/tasks/TaskPage'
import Error404 from './pages/404/Error404'
import AbouthPage from './pages/abouth-us/AbouthPage'

function AppRoutingOne() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tareas" element={<TaskPage />} />
        <Route path='/abouth' element={<AbouthPage/>}/>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  )
}

export default AppRoutingOne
