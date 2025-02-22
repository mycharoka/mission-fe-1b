import { FormInput } from "../../component/form-input"
function RegisterPage() {
  return (
    <section className="bg-registerBackground bg-cover bg-no-repeat bg-center flex justify-center items-center h-screen w-screen">
      <form action="" className="bg-[rgba(24,26,28,0.84)] w-[529px] h-[790px] rounded-[16px] p-10 flex flex-col items-center">
        <img src="../../../src/assets/Logo.png" alt="chillflix" className="w-[163px] h-auto mb-[37px]"/>
        <h3 className="mb-2 text-[32px] font-bold leading-[35.2px] text-textlightprimary md:text-lg tracking-[0.2px] md:leading-6">Daftar</h3>
        <p className="text-textlightprimary font-normal text-[16px] leading-[22.4px] tracking-[0.2px] mb-[37px]">Selamat Datang!</p>

        <fieldset className="flex flex-col border-none gap-[37px]">
          <FormInput id="username" label="Username" type="text" placeholder="Masukkan Username"/>
          <FormInput id="password" label="Kata Sandi" type="password" placeholder="Masukkan Kata Sandi"/>
          <FormInput id="passwordConfirmation" label="Konfirmasi Kata Sandi" type="password" placeholder="Masukkan Kata Sandi"/>
        </fieldset>

        <div className="mt-9 flex justify-between items-center md:mt-5 w-full">
          <p className="text-[14px] font-normal leading-[19.6px] tracking-[0.2px] text-textlightsecondary md:text-xs">Sudah punya akun? <a className="text-textlightprimary">Masuk</a></p>
        </div>

        <div className="flex flex-col items-center justify-center mt-[37px] w-full">
          <button type="button" className="bg-extrabackground w-full py-[14px] px-[20px] rounded-[24px] border-[1px] border-solid border-outlineborder text-textlightprimary font-semibold text-[16px] leading-[22.4px] tracking-[0.2px]">Daftar</button>
          <p className="m-[8px] font-medium text-[14px] leading-[19.6px] tracking-[0.2px] text-textlightdisabled">Atau</p>
          <button className="bg-transparent w-full py-[14px] px-[20px] rounded-[24px] border-[1px] border-solid border-outlineborder text-textlightprimary font-semibold text-[16px] leading-[22.4px] tracking-[0.2px] flex items-center justify-center">
            <img src="../../../src/assets/google-icon.png" alt="" className="w-[18px] h-auto"/>
            Masuk Dengan Google
          </button>
        </div>
      </form>
    </section>
  )
}

export default RegisterPage