import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import HomePage from './pages/home'
import ProfilePage from './pages/profile'
import SubscriptionPage from './pages/subscription'
import PaymentPage from './pages/payment'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/subscription' element={<SubscriptionPage/>}/>
          <Route path='/payment' element={<PaymentPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
