// export function Footer() {
//   return (
//     <>
//       <footer>
//         <div className="flex flex-col gap-[26px]">
//           <img src="../../../src/assets/Logo.png" alt="logo" className="" />
//           <p className="font-normal text-[16px] leading-[20px]">@2024 Chill All Right Reserved.</p>
//         </div>

//         <div className="list-none text-textlightsecondary font-medium text-[16px] leading-[22.4px] tracking-[0.2px]">
//           <p className="text-textlightprimary font-bold text-[16px] leading-[22.4px] tracking-[0.2px] mb-[15px]">Genre</p>
//           <ul className="list-none text-textlightsecondary font-medium text-[16px] leading-[22.4px] tracking-0.2px grid grid-cols-[repeat(4, auto)] grid-rows-[repeat(4, auto)] grid-flow-col gap-x-px-[28px]">
//           <li><a>Aksi</a></li>
//             <li><a>Drama</a></li>
//             <li><a>Fantasi Ilmiah & Fantasi</a></li>
//             <li><a>Komedi</a></li>
//             <li><a>Petualangan</a></li>
//             <li><a>Thriller</a></li>
//             <li><a>Perang</a></li>
//             <li><a>Romantis</a></li>
//             <li><a>KDrama</a></li>
//             <li><a>Komedi</a></li>
//             <li><a>Petualangan</a></li>
//             <li><a>Perang</a></li>
//             <li><a>Romantis</a></li>
//             <li><a>Sains & Alam</a></li>
//             <li><a>Thriller</a></li>
//           </ul>
//         </div>

//         <div>
//           <p>Bantuan</p>
//           <ul>
//           <li><a>FAQ</a></li>
//             <li><a>Kontak Kami</a></li>
//             <li><a>Privasi</a></li>
//             <li><a>Syarat & Ketentuan</a></li>
//           </ul>
//         </div>
//       </footer>
//     </>
//     )
// }

export function Footer() {
  return (
    <>
    <footer className="bg-pageheaderbackground py-12 px-4 md:px-20 mt-auto">
    <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div className="flex flex-col gap-6">
        <img src="../../../src/assets/Logo.png" alt="chill" className="w-32" />
        <p className="text-textlightsecondary text-sm">@2023 Chill All Rights Reserved.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-textlightprimary font-bold mb-4">Genre</h4>
          <ul className="text-textlightsecondary text-sm space-y-2">
            {['Aksi', 'Drama', 'Fantasi', 'Komedi', 'Petualangan', 'Thriller'].map((genre, i) => (
              <li key={i}>{genre}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-textlightprimary font-bold mb-4">Bantuan</h4>
          <ul className="text-textlightsecondary text-sm space-y-2">
            {['FAQ', 'Kontak Kami', 'Privasi', 'Syarat & Ketentuan'].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </>
  )
}