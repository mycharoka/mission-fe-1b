export const deleteProfile = () => {
  localStorage.removeItem('user')
  alert('berhasil delete profile')
}