import PropTypes from "prop-types"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 459,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
}
export default function MovieList(props) {
  return (
    <section className="bg-pageheaderbackground py-[20px] px-[20px]">
      <div className="w-screen md:px-[80px]">
        <h3 className="font-bold text-white text-[32px] leading-[35.2px] mt-[40px] max-md:text-[20px] max-md:mt-[20px]">{props.placeholder}</h3>

        <div className="mt-[32px] max-md:mt-[20px]">
          <Slider {...settings}>
            {props.movies.map((item, index) => (
              <div key={index}>
                {/* {console.log(item)} */}
                <img src={item.img} key={index} className="w-[234px] h-[365px] object-cover rounded-[12px]"/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  movies: PropTypes.array
}