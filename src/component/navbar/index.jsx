import { useState } from "react"
import { ProfileDropdown } from "../profile-dropdown"

export function Navbar() {
  const [isClick, setIsClick] = useState(false)

  return (
    <header className="bg-pageheaderbackground w-full z-[999] fixed px-[80px] py-[25px] max-md:px-[20px] max-md:py-[6px] max-md:h-[56px] max-md:w-screen max-md:z-[999]">
    <nav className="flex justify-between items-center  max-md:w-[350px]  max-md:py-[8px]">
      <div className="items-center flex gap-20 max-md:gap-[12px]">
        <a href="/homepage">
          <img 
            src="/assets/Logo.png" 
            alt="chill" 
            className="w-32 hidden md:block"
          />
          <img
            src="/assets/mobile-logo.png"
            alt="chill-mobile"
            className="w-[20px] h-[18px] md:hidden"
          />
        </a>
        <a className="text-textlightprimary font-medium hover:text-primary-300 text-[18px] max-md:text-[10px]">Series</a>
        <a className="text-textlightprimary font-medium hover:text-primary-300 text-[18px] max-md:text-[10px]">Film</a>
        <a className="text-textlightprimary font-medium hover:text-primary-300 text-[18px] max-md:text-[10px]">Daftar Saya</a>

      </div>
        <img 
          src="/assets/Avatar.png" 
          alt="avatar" 
          className="w-[80px] h-auto max-md:w-[40px] max-md:mr-[20px]"
          onClick={() => setIsClick(!isClick)}
        />
        {isClick && <ProfileDropdown />}
    </nav>
  </header>

  )
}