import Appframe from "../assets/app_frame.png";
import ShieldCheck from "../assets/icons/check.png";
import Coins from "../assets/icons/coins.png";
import Frames from "../assets/frames.png";

function Features() {
  return (
    <section
      id="features"
      className="flex flex-col gap-12 pt-16 xl:pt-24"
    >
      {/* Heading */}
      <article className="m-auto w-[32ch] text-center text-gray-500 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Make every penny count
        </h2>
        <p>
          Spend smarter, lower your bills, get cashback on everything you buy,
          and unlock credit to grow your business.
        </p>
      </article>

      {/* Top row: left card / phone / right card */}
      <div className="grid gap-8 md:grid-cols-[1.2fr,1fr,1.2fr]">
        {/* Left card */}
        <div className="flex flex-col justify-center rounded-2xl bg-sky-100 px-8 py-10">
          <h3 className="mb-4 text-2xl font-semibold text-gray-800">
            Pay with FinApp, quick, simple and easy
          </h3>
          <p className="text-gray-500">
            Paying your bills on FinApp has never been easier. Whether you are
            paying for electricity or internet, FinApp gets it done within
            seconds.
          </p>
        </div>

        {/* Phone in the center */}
        <div className="flex items-center justify-center rounded-2xl bg-sky-100 px-4 py-6">
          <img
            src={Appframe}
            alt="FinApp payment interface"
            className="max-h-[360px] w-auto"
          />
        </div>

        {/* Right card */}
        <div className="flex flex-col justify-center rounded-2xl bg-orange-100 px-8 py-10">
          <div className="mb-4 flex items-center justify-start">
            <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
              <img
                src={ShieldCheck}
                alt="Bank level security icon"
                className="h-8 w-8"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Bank level security
            </h3>
          </div>
          <p className="text-gray-500">
            Your money is 100% safe and secure on FinApp. No hassles, no
            glitches, get access to your money anytime.
          </p>
        </div>
      </div>

      {/* Bottom row: left small card / right wide card */}
      <div className="grid gap-8 md:grid-cols-[1fr,2fr]">
        {/* Cost reduction card */}
        <div className="flex flex-col justify-center rounded-2xl bg-orange-100 px-8 py-10">
          <div className="mb-4 flex items-center">
            <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-200">
              <img src={Coins} alt="Cost reduction icon" className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Cost reduction
            </h3>
          </div>
          <p className="text-gray-500">
            FinApp reduced payments maintenance and processing fees. No hidden
            fees.
          </p>
        </div>

        {/* Send / receive card with integrations */}
        <div className="grid gap-4 rounded-2xl bg-sky-100 px-8 py-10 md:grid-cols-[1.3fr,1fr]">
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-semibold text-gray-800">
              Send, receive and exchange money
            </h3>
            <p className="text-gray-500">
              Transfers and payments all work on FinApp. Get your alert message
              immediately after a completed transaction.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={Frames}
              alt="Payment integrations logos"
              className="max-h-[220px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
