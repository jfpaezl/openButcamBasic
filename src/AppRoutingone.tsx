import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import HomePage from './pages/home/HomePage'
import TaskPage from './pages/tasks/TaskPage'
import Error404 from './pages/404/Error404'
import AbouthPage from './pages/abouth-us/AbouthPage'
import ProfilePage from './pages/profile/ProfilePage'
import TaskDetail from './pages/tasks/taskDetail'
import LoginPage from './pages/auth/LoginPage'

function AppRoutingOne() {
  const logged = localStorage.getItem('credentials')

  return (
    <>
    <GlobalStyle />
    <Router>
      <aside className='header'>
        <Link to="/">Home</Link>
        <Link to="/tareas">Tareas</Link>
        <Link to="/abouth">Abouth</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={!logged? <LoginPage />: <Navigate to='/'/>} />
          <Route path="/tareas" element={<TaskPage />} />
          <Route path="/tareas/:id" element={<TaskDetail />} />
          <Route path='/abouth' element={<AbouthPage />} />
          <Route path='/profile' element={logged? <ProfilePage/> : <Navigate to='/login'/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default AppRoutingOne

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    background-color: #f1f1f1;
    gap: 10px;

  }
  main{
    height: 70vh;
  }
`
