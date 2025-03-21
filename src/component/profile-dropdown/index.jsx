export function ProfileDropdown() {
  return (
    <ul className="absolute right-0 translate-y-24 -translate-x-16 bottom-0 top-auto">
      <li className="flex gap-[5px] py-[8px] px-[12px] text-textlightprimary text-[14px] font-medium"><img src="../../../src/assets/dropdown-profile/account.svg" alt="" />Profil Saya</li>
      <li className="flex gap-[5px] py-[8px] px-[12px] text-textlightprimary text-[14px] font-medium"><img src="../../../src/assets/dropdown-profile/star.svg" alt="" />Ubah Premium</li>
      <li className="flex gap-[5px] py-[8px] px-[12px] text-textlightprimary text-[14px] font-medium"><img src="../../../src/assets/dropdown-profile/login-variant.svg" alt="" />Keluar</li>
    </ul>
  )
}