import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import HomePage from './pages/home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path= '/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
