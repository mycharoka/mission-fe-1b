import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
}

const watchListImages = [
  {
    img: '../../../src/assets/continue-watching/avatar.png'
  },
  {
    img: '../../../src/assets/continue-watching/batman.png'
  },
  {
    img: '../../../src/assets/continue-watching/blue-lock.png'
  },
  {
    img: '../../../src/assets/continue-watching/shazam.png'
  },
]
export function ContinueWatchList() {
  return (
    <section className="bg-pageheaderbackground py-[20px] px-[20px] ">
      <div className="w-screen px-[80px]">
        <h3 className="font-bold text-[32px] leading-[35.2px] text-white">Melanjutkan Tonton Film</h3>
        <div className="mt-[32px]">
        <Slider {...settings}>
          {watchListImages.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="img" className="w-[302px] h-[162px] object-cover rounded-[12px]" key={index} />
            </div>
          ))}
        </Slider>
        </div>
      </div>
      
    </section>
  )
}