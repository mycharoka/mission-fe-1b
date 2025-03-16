import { Footer } from "../../component/footer";
import MovieList from "../../component/movie-list";
import { Navbar } from "../../component/navbar";
import { ProfileInput } from "../../component/profile-input";
import dataImages from "../../data/image-lists";

export default function ProfilePage() {
  return (
    <>
      <Navbar/>
      <section className="pt-[1px] px-[80px]">
        <div className="mt-[150px]">
          <h3 className="font-bold text-[32px] text-white">Profil Saya</h3>
          <div className="flex w-full justify-between gap-[80px]">
            {/* div untuk photo & input */}
            <div className="w-full">

              {/* div untuk photo */}
              <div className="flex items-center gap-[24px]">
                <img src="../../../src/assets/profile-picture.png" alt="profile-picture" className="w-[140px]" />
                <div className="space-y-[8px]">
                  <button className="px-[22px] py-[10px] border-solid border-[1px] border-[#3254FF] font-bold text-[16px] text-[#3254FF] tracking-0.2px rounded-[48px]" type="button">Ubah Foto</button>
                  <div className="flex gap-[4px]">
                    <img src="../../../src/assets/file-upload.png" alt="file-upload" />
                    <p className="text-textlightsecondary text-[14px] tracking-0.2px font-normal">Maksimal 2TB</p>
                  </div>
                </div>
              </div>
              {/* div untuk photo */}

              {/* div untuk input */}
              <div className="mt-[32px] space-y-[12px]">
                <ProfileInput field="Nama Lengkap" placeholder="Nama Lengkap Pengguna"/>
                <ProfileInput field="Email" placeholder="Email Pengguna"/>
                <ProfileInput field="Password" placeholder="Password Pengguna"/>
              </div>
              {/* div untuk input */}

            </div>
            {/* div untuk photo & input */}

            {/* div untuk berlangganan */}
            <div className="w-full bg-[#3D4142] rounded-[12px] p-[24px] h-fit flex flex-col gap-[20px] items-end">
              <div className="flex gap-[20px]">
                <img src="../../../src/assets/Warning.png" alt="warning-sign" />
                <div>
                  <p className="font-bold text-[24px] text-textlightprimary">Saat ini anda belum berlangganan</p>
                  <p className="font-normal text-[18px] text-textlightsecondary">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu</p>
                </div>
              </div>
              <button className="text-textlightprimary text-[16px] font-bold py-[6px] px-[22px] bg-bodybackground rounded-[48px] w-fit">Mulai Berlangganan</button>
            </div>
            {/* div untuk berlangganan */}

          </div>
          <button className="bg-backgroundprimary300 text-textlightprimary font-bold text-[16px] py-[10px] px-[26px] rounded-[48px]">Simpan</button>
        </div>

        <div className="mt-[40px]">
          <div className="flex justify-between">
            <p className="font-bold text-[32px] text-textlightprimary">Daftar Saya</p>
            <p className="font-normal text-[18px] text-textlightprimary">Lihat Semua</p>
          </div>

          <div className="flex gap-[16px] mt-[32px]">
            <img src="../../../src/assets/new-release/sonic.png" alt="" className="w-[200px]"/>
            <img src="../../../src/assets/new-release/ted_lasso.png" alt=""  className="w-[200px]"/>
            <img src="../../../src/assets/trending-movies/dr_strange.png" alt="" className="w-[200px]"/>
            <img src="../../../src/assets/top-rating/suzume.png" alt="" className="w-[200px]"/>
            <img src="../../../src/assets/trending-movies/bluelock.png" alt="" className="w-[200px]"/>
            <img src="../../../src/assets/trending-movies/baymax.png" alt="" className="w-[200px]"/>
          </div>
        </div>
      </section>
      <Footer/>
    </>

  )
}