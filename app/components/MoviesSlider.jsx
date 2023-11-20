
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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


export const MoviesSlider = () => {

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
            <MovieCard imageUrl="/images/movies_image_1.jpeg" description='The Simpsons Meet the Bocellis in "Feliz Navidad"' />
            <MovieCard imageUrl="/images/movies_image_2.jpeg" description="The Santa Clause" />
            <MovieCard imageUrl="/images/movies_image_3.jpeg" description="Frozen" />
            <MovieCard imageUrl="/images/movies_image_4.jpeg" description="Home Alone" />
            <MovieCard imageUrl="/images/movies_image_5.jpeg" description="The Guardians of the Galaxy Holiday Special" />
            <MovieCard imageUrl="/images/movies_image_6.jpeg" description="LEGO Star Wars Holiday Special" />
            <MovieCard imageUrl="/images/movies_image_7.jpeg" description="Marvel Studios' Hawkeye" />
            <MovieCard imageUrl="/images/movies_image_8.jpeg" description="Tim Burton's The Nightmare Before Christmas" />
            <MovieCard imageUrl="/images/movies_image_9.jpeg" description="Ice Age: A Mammoth Christmas" />
            <MovieCard imageUrl="/images/movies_image_10.jpeg" description="Beauty and the Best: The Enchanted Christmas" />
            <MovieCard imageUrl="/images/movies_image_11.jpeg" description="A Christmas Carol" />
            <MovieCard imageUrl="/images/movies_image_12.jpeg" description="High School Musical The Musical The Holiday Special" />
            <MovieCard imageUrl="/images/movies_image_13.jpeg" description="Olaf's Frozen Adventure" />
            <MovieCard imageUrl="/images/movies_image_14.jpeg" description="The Santa Clause 2" />
            <MovieCard imageUrl="/images/movies_image_15.jpeg" description="Godmothered" />
            <MovieCard imageUrl="/images/movies_image_16.jpeg" description="The Santa Clauses" />
            <MovieCard imageUrl="/images/movies_image_17.jpeg" description="Home Sweet Home Alone" />
            <MovieCard imageUrl="/images/movies_image_18.jpeg" description="Mickey's Christmas Carol" />
            <MovieCard imageUrl="/images/movies_image_19.jpeg" description="Duck the Halls: A Mickey Mouse Christmas" />
            <MovieCard imageUrl="/images/movies_image_20.jpeg" description="The Muppet Christmas Carol" />
            <MovieCard imageUrl="/images/movies_image_21.jpeg" description="Christmas...Again?!" />
            <MovieCard imageUrl="/images/movies_image_22.jpeg" description="I'll Be Home For Christmas" />
            <MovieCard imageUrl="/images/movies_image_23.jpeg" description="Noelle" />
            <MovieCard />
            <MovieCard />
        </Slider>
    );
  }