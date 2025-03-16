import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import HomePage from './pages/home'
import ProfilePage from './pages/profile'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
