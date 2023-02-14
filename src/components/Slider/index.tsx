import React from 'react'
import SliderComponent from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface SliderProps {
  children: React.ReactNode[]
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const settings = {
    dots: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    loop: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return <SliderComponent {...settings}>{children}</SliderComponent>
}

export default Slider
