export const updateProfile = (data) => {
  const updateUser = localStorage.getItem('user') || []
  const parsedUser = JSON.parse(updateUser)
  parsedUser.username = data.username
  parsedUser.email = data.email
  parsedUser.password = data.password
  localStorage.setItem('user', JSON.stringify(parsedUser))
  alert('berhasil update profile')
}