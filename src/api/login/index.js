// import { useNavigate } from "react-router-dom"


export const loginUser = data => {
  // const navigate = useNavigate()
  const getUser = localStorage.getItem('user') || []
  console.log('contekan user kalo lupa > ',getUser)
  const parsedUser = JSON.parse(getUser)
  if ((data.username === parsedUser.username) && (data.password === parsedUser.password)) {
    alert('berhasil login')
    return 'success'
    // navigate('/home')
  } else {
    alert('username atau password salah')
  }
}