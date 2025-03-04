export function Hero() {
  return (
    <section>
      <img src="../../../src/assets/ao_ashi.jpg" alt="" className="w-full h-[70%] object-cover object-top mt-[90px]"/>

    {/* <div className="flex flex-col gap-[10px] w-screen relative mt-[-150px] h-[600px] bg-[linear-gradient(to top, var(pageheaderbackground), transparent)] content-end">
      
    </div> */}
    <div className="flex flex-col gap-[10px] w-screen relative mt-[-300px] px-[80px] pb-[80px] bg-heroGradient">
        <div className="w-auto">
          <p className="font-bold text-textlightprimary text-[48px] leading-[52.8px]">Ao Ashi</p>
          <p className="font-medium text-[18px] leading-[25.2px] tracking-[0.2px] text-textlightprimary w-[668px] mt-[20px]">In an unfamiliar setting surrounded by talent, Ashito must bring out the best of his ability to prove himself and secure what could be a life-changing career.</p>
        </div>
        
        <div className="flex  w-auto justify-between mt-[40px]">
          <div className="flex gap-[10px]">
            <button className="bg-backgroundprimary300 rounded-[48px] py-[10px] px-[26px] font-bold text-[16px] text-textlightprimary leading-[22.4px] tracking-[0.2px] border-none">Mulai</button>
            <button className="rounded-[48px] bg-paperbackground py-[10px] px-[26px] font-bold leading-[22.4px] tracking-[0.2px] text-textlightprimary border-none flex items-center content-center gap-[10px]">
              <span className="text-textlightprimary text-[20px]">ⓘ</span>
              <span>Selengkapnya</span>
            </button>
            <p className="border-[1px] border-solid border-textlightprimary rounded-[24px] p-[10px] gap-[10px] w-[52px] font-normal text-[18px] leading-[25.2px] tracking-[0.2px] text-textlightsecondary text-center">14</p>
          </div>

          <img src="../../../src/assets/muteIcon.png" alt="mute" className="bg-transparent bg-none"/>
        </div>

    </div>
    
    </section>
  )
}