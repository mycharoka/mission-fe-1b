import { useState } from "react"
import { AuthSection } from "../../component/auth-section"
import { FormInput } from "../../component/form-input"
import { loginUser } from "../../api/login"
import { useNavigate } from "react-router"

function LoginPage() {
  const navigate = useNavigate()
  function handleLogin(e) {
    e.preventDefault()
    const data = {
      username: e.target.username.value, 
      password: e.target.password.value
    }
  
    const loginProcess = loginUser(data)
    console.log('login >> ', loginProcess)
    if (loginProcess === 'success') {
      navigate('/homepage')
    }
  }
  
  return (
      <section className="
        bg-cover 
        bg-no-repeat 
        bg-center 
        flex 
        justify-center 
        items-center 
        h-screen 
        w-screen 
        bg-loginBackground
      ">
        <form onSubmit={(e) => handleLogin(e)} action="" className="w-[529px] h-auto rounded-[16px] bg-[rgba(24,26,28,0.84)] p-10 flex flex-col items-center max-md:w-[306px] max-md:p-6">
          <img src="../../../src/assets/Logo.png" className="w-[163px] h-auto mb-[37px] max-md:h-[24px] max-md:w-[94px] max-md:mb-[20px]"></img>

          <h3 className="text-[32px] font-bold text-textlightprimary tracking-[0.2px] max-md:text-[18px]">Masuk</h3>

          <p className="text-textlightprimary font-normal text-[16px] leading-[22.4px] tracking-[0.2px] mb-[37px] max-md:mb-[20px] max-md:text-[10px]">Selamat datang kembali!</p>

          <fieldset className="flex flex-col border-none gap-[37px] w-full max-md:gap-[20px]">
            <FormInput id="username" label="Username" type="text" placeholder="Masukkan Username"/>
            <FormInput id="password" label="Kata Sandi" type="password" placeholder="Masukkan Kata Sandi"/>
          </fieldset>

          <div className="mt-9 flex justify-between items-center max-md:mt-[6px] w-full">
              <p className="text-[14px] font-normal leading-[19.6px] tracking-[0.2px] text-textlightsecondary max-md:text-[10px]">
                Belum punya akun?
                <a href="/register" className="text-textlightprimary">
                  Daftar
                </a>
              </p>
              <a className="text-textlightprimary text-[16px] max-md:text-[10px]">
                Lupa kata sandi?
              </a>
          </div>

          <AuthSection name="Masuk" googleAction="Masuk dengan Google"/>
        </form>

      </section>
  )
}

export default LoginPage