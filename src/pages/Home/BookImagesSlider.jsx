import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BookImagesSlider = ({ books }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-8 max-w-screen-xl mx-auto px-4">
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="px-2">
            <img
              src={book.image}
              alt={book.title}
              className="rounded-lg shadow-md mx-auto"
              style={{ maxHeight: "150px", objectFit: "contain", cursor: "pointer" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookImagesSlider;
