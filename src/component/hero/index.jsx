export function Hero() {
  return (
    <section className="">
      <img src="../../../src/assets/ao_ashi.jpg" alt="" className="w-full h-[500px] object-cover object-top mt-[90px] max-md:h-full max-md:mt-[50px]"/>

      <div className="flex flex-col gap-[10px] w-full relative mt-[-500px] h-[500px] px-[80px] pb-[80px] z-50  bg-heroGradient justify-end max-md:pl-[22px] max-md:pr-[18px] max-md:mt-[-800px] max-md:h-[800px] max-md:pb-[15px]">

          <div className="w-auto  max-md:mt-[600px] max-md:pt">
            <p className="font-bold text-textlightprimary text-[48px] max-md:text-[24px] ">Ao Ashi</p>
            <p className="font-medium text-[18px] tracking-[0.2px] text-textlightprimary w-[668px] mt-[20px] max-md:text-[12px] max-md:mt-[5px] max-md:w-[200px] ">In an unfamiliar setting surrounded by talent, Ashito must bring out the best of his ability to prove himself and secure what could be a life-changing career.</p>
          </div>
          
          <div className="flex  w-auto justify-between mt-[40px] max-md:mt-[5px]">
            <div className="flex gap-[10px]  max-md:gap-[8px]">
              <button className="bg-backgroundprimary300 rounded-[48px] py-[10px] px-[26px] font-bold text-[16px] text-textlightprimary leading-[22.4px] tracking-[0.2px] border-none max-md:px-[7px] max-md:py-[3px] max-md:text-[12px] max-md:rounded-[20px]">Mulai</button>
              <button className="rounded-[48px] bg-paperbackground py-[10px] px-[26px] font-bold leading-[22.4px] tracking-[0.2px] text-textlightprimary border-none flex items-center content-center gap-[10px] max-md:px-[7px] max-md:py-[3px] max-md:text-[12px] max-md:gap-[6px]">
                <span className="text-textlightprimary text-[20px]">ⓘ</span>
                <span>Selengkapnya</span>
              </button>
              <p className="border-[1px] border-solid border-textlightprimary rounded-[24px] p-[10px] gap-[10px] w-[52px] font-normal text-[18px] tracking-[0.2px] text-textlightsecondary text-center max-md:p[5px] max-md:text-[12px] max-md:rounded-[20px]">14</p>
            </div>

            <img src="../../../src/assets/muteIcon.png" alt="mute" className="bg-transparent bg-none max-md:hidden "/>
          </div>

      </div>
    
    </section>
  )
}