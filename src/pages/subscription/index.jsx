import {Navbar} from "../../component/navbar/index.jsx";
import {Footer} from "../../component/footer/index.jsx";

export default function SubscriptionPage() {
    return (
        <>
            <Navbar/>
            <section className="p-20">
                <h3 className="text-white text-center font-bold text-[32px] mb-20 mt-[80px]">Kenapa Harus Berlangganan?</h3>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    <div className="flex flex-col items-center">
                        <img src="../../../src/assets/subscription/download.png"/>
                        <p className="text-textlightsecondary font-bold text-[20px] text-center
                        ">Download Konten<br/>Pilihan</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="../../../src/assets/subscription/advertisements-off.png"/>
                        <p className="text-textlightsecondary font-bold text-[20px] text-center
                        ">Tidak Ada Iklan</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="../../../src/assets/subscription/movie-roll.png"/>
                        <p className="text-textlightsecondary font-bold text-[20px] text-center">Tonton Semua Konten</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="../../../src/assets/subscription/video-4k-box.png"/>
                        <p className="text-textlightsecondary font-bold text-[20px] text-center">Kualitas Maksimal<br/> Sampai Dengan 4K</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="../../../src/assets/subscription/tablet-cellphone.png"/>
                        <p className="text-textlightsecondary font-bold text-[20px] text-center">Tonton di TV, Tablet,<br/> Mobile dan Laptop</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="../../../src/assets/subscription/message-reply-text.png"/>
                        <p className="text-textlightsecondary font-bold text-[20px] text-center">Subtitle Untuk<br/> Pilihan Konten</p>
                    </div>
                </div>
            </section>

            <section className="bg-paperbackground py-10">
                <h3 className="text-white text-center font-bold text-[32px] mb-6">Pilih Paketmu</h3>
                <p className="text-gray-400 text-center font-medium text-[18px] mb-12">Tentukan paket sesuai kebutuhanmu!</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-4 lg:mx-80 rounded-16px">
                    <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-6 rounded-16px text-center text-white">
                        <span className="inline-block bg-gray-800 px-4 py-2 rounded-[999px] font-semibold mb-4">Individu</span>
                        <p className="mb-6">Mulai dari Rp 49.999/bulan<br/>1 Akun</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Tidak Ada Iklan
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Kualitas 720p
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Download konten pilihan
                            </li>
                        </ul>
                        <button className="bg-white text-blue-700 px-6 py-2 rounded-[999px] font-semibold mb-2">Langganan</button>
                        <p className="text-[12px] text-white">Syaran & ketentuan berlaku</p>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-6 rounded-16px text-center text-white">
                        <span className="inline-block bg-gray-800 px-4 py-2 rounded-[999px] font-semibold mb-4">Berdua</span>
                        <p className="mb-6">Mulai dari Rp 79.999/bulan<br/>2 Akun</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Tidak Ada Iklan
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Kualitas 1080p
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Download konten pilihan
                            </li>
                        </ul>
                        <button className="bg-white text-blue-700 px-6 py-2 rounded-[999px] font-semibold mb-2">Langganan</button>
                        <p className="text-[12px] text-white">Syaran & ketentuan berlaku</p>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-500 p-6 rounded-16px text-center text-white">
                        <span className="inline-block bg-gray-800 px-4 py-2 rounded-[999px] font-semibold mb-4">Keluarga</span>
                        <p className="mb-6">Mulai dari Rp 159.999/bulan<br/>5-7 Akun</p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Tidak Ada Iklan
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Kualitas 4K
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="mr-2">✔️</span>
                                Download konten pilihan
                            </li>
                        </ul>
                        <button className="bg-white text-blue-700 px-6 py-2 rounded-[999px] font-semibold mb-2">Langganan</button>
                        <p className="text-[12px] text-white">Syaran & ketentuan berlaku</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}