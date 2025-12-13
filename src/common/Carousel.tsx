import { useState } from "react";
import ArrowBack from "../assets/icons/arrow_back.svg";
import ArrowForward from "../assets/icons/arrow_forward.svg";
import Star from "../assets/icons/star.svg";

interface Slide {
  src: string;
  text: string;
  name: string;
  country: string;
}

interface CarouselProps {
  slides: Slide[];
}

function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  function previousSlide() {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }

  return (
    <div className="relative h-[400px] w-full max-w-[400px] overflow-hidden rounded-2xl md:h-[450px] lg:h-[500px]">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex h-full w-full flex-shrink-0 flex-col"
          >
            <img
              className="h-full w-full object-cover"
              src={slide.src}
              alt={`Customer testimonial ${index + 1}`}
            />
            <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black/80 to-transparent p-6 lg:h-96 lg:p-8">
              <p className="mb-4 text-lg leading-relaxed lg:text-xl">
                {slide.text}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold lg:text-2xl">
                    {slide.name}
                  </h3>
                  <h4 className="text-lg text-gray-300 lg:text-xl">
                    {slide.country}
                  </h4>
                </div>
                <div className="flex gap-1 lg:hidden">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <img
                      key={i}
                      src={Star}
                      alt=""
                      className="h-5 w-5 fill-yellow-400"
                    />
                  ))}
                </div>
                <div className="hidden gap-1 lg:flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <img
                      key={i}
                      src={Star}
                      alt=""
                      className="h-6 w-6 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={previousSlide}
        className="absolute bottom-6 left-6 z-10 h-12 w-12 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm hover:bg-white hover:shadow-xl lg:bottom-8 lg:left-8"
        aria-label="Previous slide"
      >
        <img src={ArrowBack} alt="" className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute bottom-6 right-6 z-10 h-12 w-12 rounded-full bg-white/90 p-2 shadow-lg backdrop-blur-sm hover:bg-white hover:shadow-xl lg:bottom-8 lg:right-8"
        aria-label="Next slide"
      >
        <img src={ArrowForward} alt="" className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 lg:bottom-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === current
                ? "scale-125 bg-white shadow-lg"
                : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
