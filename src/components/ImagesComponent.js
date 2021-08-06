import Slider from "react-slick";

const CustomPagingSlider = () => {
    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img src={`/assets/images/abstract0${i + 1}.jpg`} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
         <div className="custom_paging">
        <Slider {...settings}>
          <div>
            <img src={"/assets/images/abstract02.jpg"} />
          </div>
          <div>
            <img src={"/assets/images/abstract03.jpg"} />
          </div>
          <div>
            <img src={"/assets/images/abstract04.jpg"} />
          </div>
          <div>
            <img src={"/assets/images/abstract05.jpg"} />
          </div>
        </Slider>
      </div>
    )
}

export default CustomPagingSlider