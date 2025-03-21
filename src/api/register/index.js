import axios from 'axios'

export const registerUser = async(data) => {
  /**
   * yg harus dilakuin ketika register user:
   * 1. validasi:
   *    - username harus beda dari yg udh kesimpen
   *    - password harus diisi
   *    - password harus sama dengan password confirmation
   * 2. ketika sukses disimpan di mock API:
   *    - username & password simpen di localstorage (not recommended in live prod)
   */
  const url = import.meta.env.VITE_MOCK_API
  const getUser = localStorage.getItem('user') || []
  const parsedUser = typeof getUser === 'string' ? JSON.parse(getUser) : []

  if (data.username === parsedUser.username) {
    alert('username sudah terdaftar')
    return
  }

  if (data.password.length === 0) {
    alert('password harus diisi')
    return
  }

  if (data.password !== data.password_confirmation) {
    alert('password dan password confirmation harus sama')
    return
  }
  
  try {
    const response = await axios.post(`${url}/auth`, data)
    console.log('res> ', response)
    if (response.status == 201) {
      localStorage.setItem('user', JSON.stringify(response.data))
      alert('User Berhasil Dibuat')
    }

  } catch (error) {
    console.error(error)
  }
}