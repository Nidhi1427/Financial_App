import StoreLinks from "../common/StoreLinks";
import Carousel from "../common/Carousel";

function Reviews() {
  const slides = [
    {
      src: "https://as1.ftcdn.net/v2/jpg/05/44/43/76/1000_F_544437651_6n0obbWNCKLQb2UT103ydNbjDM6ljmyE.jpg",
      text:
        '"FinApp has helped me send and receive money with little to no complications. It`s what everyone who wants to be on top of their money needs!"',
      name: "Haruka Sato",
      country: "Japan",
    },
    {
      src: "https://as1.ftcdn.net/v2/jpg/04/78/29/62/1000_F_478296299_c8IR9ilMArIihVl5Uz2C6V8fzrS0jCyZ.jpg",
      text:
        '"Using FinApp has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
      name: "Elena Rodriguez",
      country: "Spain",
    },
    {
      src: "https://www.shutterstock.com/shutterstock/photos/2427045615/display_1500/stock-photo-smiling-mature-business-man-executive-sitting-at-desk-using-smartphone-happy-busy-middle-aged-2427045615.jpg",
      text:
        '"FinApp has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "Thomas Morgan",
      country: "USA",
    },
  ];

  return (
    <section
  id="reviews"
  className="flex flex-col items-center justify-between gap-12 py-20 lg:flex-row"
>

      <article className="flex flex-col items-center justify-center lg:w-1/2 lg:items-start">
        <h2 className="mb-6 max-w-[16ch] text-center text-4xl font-semibold text-gray-900 lg:w-full lg:text-left">
          Join other thousands of people growing with FinApp
        </h2>
        <StoreLinks type="Standard" />
      </article>

      <div className="flex justify-center lg:w-1/2">
        <Carousel slides={slides} />
      </div>
    </section>
  );
}

export default Reviews;
