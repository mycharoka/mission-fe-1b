// export function Navbar() {
//   return (

//       <nav className="bg-pageheaderbackground fixed w-screen flex items-center justify-between z-[999]">
//         <div className="font-medium text-[18px] leading-[25.2px] tracking-[0.2px] my-[25px] ml-[80px] flex justify-between items-center w-[550.5px] h-[44px]">
//           <img src="../../src/assets/Logo.png" alt="" />
//           <a href="" className="text-textlightprimary no-underline">Series</a>
//           <a href="" className="text-textlightprimary no-underline">Film</a>
//           <a href="" className="text-textlightprimary no-underline">Daftar Saya</a>
//         </div>
//       </nav>

//   )
// }

export function Navbar() {
  return (
    <>
    <header className="w-full z-[999] bg-pageheaderbackground fixed">
    <nav className="flex justify-between items-center px-4 md:px-20 py-[25px]">
      <div className="flex items-center gap-20">
        <img 
          src="../../../src/assets/Logo.png" 
          alt="chill" 
          className="w-32 hidden md:block"
        />
        <img
          src="../../../src/assets/mobile-logo.png"
          alt="chill-mobile"
          className="w-8 md:hidden"
        />
        <div className="hidden md:flex gap-20">
          <a className="text-textlightprimary font-medium hover:text-primary-300 text-[18px]">Series</a>
          <a className="text-textlightprimary font-medium hover:text-primary-300 text-[18px]">Film</a>
          <a className="text-textlightprimary font-medium hover:text-primary-300 text-[18px]">Daftar Saya</a>
        </div>
      </div>
      <img 
        src="../../../src/assets/Avatar.png" 
        alt="avatar" 
        className="w-16 md:w-20"
      />
    </nav>
  </header>
  </>
  )
}