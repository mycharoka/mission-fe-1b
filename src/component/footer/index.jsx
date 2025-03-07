import { FooterListLink } from "../footer-list-link";

export function Footer() {
  return (
    <footer className="bg-pageheaderbackground py-[60px] px-[80px] flex justify-between">

      <div className="flex w-full justify-between">

        <div className="flex flex-col gap-[26px]">
          <img src="../../../src/assets/Logo.png" alt="logo" className="w-[163px]" />
          <p className="text-textlightsecondary font-normal text-[16px] leading-[20px]">@2023 Chill All Rights Reserved.</p>
        </div>

        <div className="flex justify-between gap-[160px]">
          <div className="list-none text-textlightsecondary font-medium text-[16px] leading-[22.4px] tracking-[0.2px]">
            <p className="text-textlightprimary font-bold mb-[15px]">Genre</p>

              <ul className="grid grid-cols-4-auto grid-rows-4-auto gap-x-[28px] gap-y-[13px] grid-flow-col">
                <FooterListLink name="Aksi"/>
                <FooterListLink name="Anak-anak"/>
                <FooterListLink name="Anime"/>
                <FooterListLink name="Britania"/>
                <FooterListLink name="Drama"/>
                <FooterListLink name="Fantasi Ilmiah & Fantasi"/>
                <FooterListLink name="Kejahatan"/>
                <FooterListLink name="KDrama"/>
                <FooterListLink name="Komedi"/>
                <FooterListLink name="Petualangan"/>
                <FooterListLink name="Perang"/>
                <FooterListLink name="Romantis"/>
                <FooterListLink name="Sains & Alam"/>
                <FooterListLink name="Thriller"/>
              </ul>
            </div>


          <div>
            <p className="text-textlightprimary font-bold mb-[15px]">Bantuan</p>
            <ul className="list-none text-textlightsecondary font-medium text-[16px] leading-[22.4px] tracking-[0.2px] grid grid-cols-1 gap-x-[28px] gap-y-[13px]">
              <FooterListLink name="FAQ"/>
              <FooterListLink name="Kontak Kami"/>
              <FooterListLink name="Privasi"/>
              <FooterListLink name="Syarat & Ketentuan"/>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}