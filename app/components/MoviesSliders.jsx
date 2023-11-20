
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { celebrateMoviesList } from "../movieData"

// components
import { MovieCard } from "./MovieCard"


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, right: "80px", top: "45%", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, right: "80px", top: "45%", background: "gray" }}
        onClick={onClick}
      />
    );
  }


export const CelebrateSectionSlider = () => {

    var settings = {
      dots: false,
      infinite: false,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <Slider {...settings} className="px-20">
          {celebrateMoviesList.map((movie, index) => {
            return <MovieCard key={index} imageUrl={movie.imageUrl} description={movie.description} />
          })}
        </Slider>
    );
  }




export const ComingSoonSectionSlider = () => {

  console.log("logging movies data:", celebrateMoviesList)

    var settings = {
      dots: false,
      infinite: false,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      initialSlide: 0,
      responsive: [
        {
            breakpoint: 1500,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
        {
          breakpoint: 1290,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <Slider {...settings} className="px-20">
          {celebrateMoviesList.map((movie, index) => {
            return <MovieCard key={index} imageUrl={movie.imageUrl} description={movie.description} />
          })}
        </Slider>
    );
  }