import {Navbar} from "../../component/navbar/index.jsx";
import {Footer} from "../../component/footer/index.jsx";

export default function SubscriptionPage() {
    // return (
    //     <>
    //         <Navbar/>
    //         <section className="pt-[1px] px-[80px]">
    //             {/*benefit langganan*/}
    //             <div className="mt-[150px] border-yellow-300 border-2">
    //                 <div className="flex justify-center">
    //                     <h3 className="font-bold text-[32px] text-textlightprimary">Kenapa Harus Berlangganan?</h3>
    //                 </div>
    //
    //                 <div className="border-red-500 border-2 mt-[72px]">
    //                     <div className="flex justify-around">
    //                         <div className="items-center flex flex-col">
    //                             <img src="../../../src/assets/subscription/download.png"/>
    //                             <h5 className="font-bold text-[20px] text-textlightsecondary">Download Konten
    //                                 Pilihan</h5>
    //                         </div>
    //                         <div className="items-center flex flex-col">
    //                             <img src="../../../src/assets/subscription/advertisements-off.png"/>
    //                             <h5 className="font-bold text-[20px] text-textlightsecondary">Tidak Ada Iklan</h5>
    //                         </div>
    //                         <div className="items-center flex flex-col">
    //                             <img src="../../../src/assets/subscription/movie-roll.png"/>
    //                             <h5 className="font-bold text-[20px] text-textlightsecondary">Tonton Semua Konten</h5>
    //                         </div>
    //                     </div>
    //
    //                     <div className="flex justify-around mt-[40px]">
    //                         <div className="items-center flex flex-col">
    //                             <img src="../../../src/assets/subscription/download.png"/>
    //                             <h5 className="font-bold text-[20px] text-textlightsecondary">Kualitas Maksimal Sampai Dengan 4K</h5>
    //                         </div>
    //                         <div className="items-center flex flex-col">
    //                             <img src="../../../src/assets/subscription/advertisements-off.png"/>
    //                             <h5 className="font-bold text-[20px] text-textlightsecondary">Tidak Ada Iklan</h5>
    //                         </div>
    //                         <div className="items-center flex flex-col">
    //                             <img src="../../../src/assets/subscription/movie-roll.png"/>
    //                             <h5 className="font-bold text-[20px] text-textlightsecondary">Tonton Semua Konten</h5>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //
    //             {/*pilihan paket langganan*/}
    //             <div></div>
    //         </section>
    //         {/*<Footer/>*/}
    //     </>
    // )
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
        </>
    )
}