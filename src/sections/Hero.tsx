import Phone from "../assets/mockup.svg";
import HeroImage from "../assets/hero.png";
import StoreLinks from "../common/StoreLinks";

function Hero() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[85vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0">
      <div className="sm:w-full md:w-3/6 z-40">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-4xl font-semibold text-white drop-shadow-lg sm:text-5xl md:mx-0 md:text-left">
          Start spending the smart way
        </h1>
        <p className="m-auto w-[34ch] text-center text-gray-900 font-medium leading-relaxed md:m-0 md:text-left bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          Take control of your finances anytime, anywhere with FinApp.
          Discover the smart way to use your money!
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <StoreLinks type="Standard" />
        </div>
      </div>

      <div className="md:w-3/6 flex flex-col xl:flex-row items-center gap-8 xl:gap-12">
        {/* Phone - always visible, top priority */}
        <div className="flex-shrink-0">
          <img
            className="w-72 md:w-80 drop-shadow-2xl"
            src={Phone}
            alt="FinApp mobile app interface"
          />
        </div>
        {/* Woman - smaller, to the side */}
        <div className="hidden xl:block flex-shrink-0">
          <img
            className="rounded-2xl w-64 drop-shadow-xl"
            src={HeroImage}
            alt="A woman happily using FinApp"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
