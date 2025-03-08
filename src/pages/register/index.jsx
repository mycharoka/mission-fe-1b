import { AuthSection } from "../../component/auth-section"
import { FormInput } from "../../component/form-input"
function RegisterPage() {
  return (
    <section className="bg-registerBackground bg-cover bg-no-repeat bg-center flex justify-center items-center h-screen w-screen">
      <form action="" className="bg-[rgba(24,26,28,0.84)] w-[529px] h-auto rounded-[16px] p-10 flex flex-col items-center max-md:w-[306px] max-md:p-6">
        <img src="../../../src/assets/Logo.png" alt="chillflix" className="w-[163px] h-auto mb-[37px] max-md:h-[24px] max-md:w-[94px] max-md:mb-[20px]"/>
        <h3 className="text-[32px] font-bold leading-[35.2px] text-textlightprimary tracking-[0.2px] max-md:text-[18px]">Daftar</h3>
        <p className="text-textlightprimary font-normal text-[16px] leading-[22.4px] tracking-[0.2px] mb-[37px] max-md:mb-[20px] max-md:text-[10px]">Selamat Datang!</p>

        <fieldset className="flex flex-col border-none gap-[37px] w-full max-md:gap-[20px]">
          <FormInput id="username" label="Username" type="text" placeholder="Masukkan Username"/>
          <FormInput id="password" label="Kata Sandi" type="password" placeholder="Masukkan Kata Sandi"/>
          <FormInput id="passwordConfirmation" label="Konfirmasi Kata Sandi" type="password" placeholder="Masukkan Kata Sandi"/>
        </fieldset>

        <div className="mt-9 flex justify-between items-center max-md:mt-[6px] w-full">
          <p className="text-[14px] font-normal leading-[19.6px] tracking-[0.2px] text-textlightsecondary max-md:text-[10px]">Sudah punya akun? <a className="text-textlightprimary">Masuk</a></p>
        </div>

        <AuthSection name="Daftar" googleAction="Daftar dengan Google"/>
      </form>
    </section>
  )
}

export default RegisterPage