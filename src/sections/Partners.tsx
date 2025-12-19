import Klarna from "../assets/logo-wall/klarna.png";
import Stripe from "../assets/logo-wall/stripe.png";
import Paypal from "../assets/logo-wall/paypal.png";
import Bedc from "../assets/logo-wall/bedc.png";
import Mastercard from "../assets/logo-wall/mastercard.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import Visa from "../assets/logo-wall/visa.png";
import Payoneer from "../assets/logo-wall/payoneer.png";
import Mobile from "../assets/logo-wall/mobile.png";
import Ikeja from "../assets/logo-wall/ikeja.png";
import Dstv from "../assets/logo-wall/dstv.png";

import LogoWall from "../common/LogoWall";

function Partners() {
  return (
    <section id="partners" className="mt-20 bg-white-50 py-20">
  <div className="flex flex-col items-center">
    <article className="mb-10 w-full text-center">

          <h2 className="mb-4 text-4xl font-semibold text-gray-800">
            Transact seamlessly with...
          </h2>
          <p className="mx-auto max-w-[65ch]">
            Connect your other accounts to FinApp seamlessly. FinApp supports
            200+
            <br className="hidden sm:block" />
            integration with other payment platforms like Stripe, PayPal,
            Payoneer and others.
          </p>
        </article>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <LogoWall
            src1={Klarna}
            src2={Stripe}
            src3={Paypal}
            alt1="Klarna logo"
            alt2="Stripe logo"
            alt3="PayPal logo"
          />
          <LogoWall
            src1={Bedc}
            src2={Mastercard}
            src3={Mtn}
            alt1="BEDC logo"
            alt2="Mastercard logo"
            alt3="MTN logo"
          />
          <LogoWall
            src1={Airtel}
            src2={Visa}
            src3={Payoneer}
            alt1="Airtel logo"
            alt2="Visa logo"
            alt3="Payoneer logo"
          />
          <LogoWall
            src1={Mobile}
            src2={Ikeja}
            src3={Dstv}
            alt1="Mobile logo"
            alt2="Ikeja logo"
            alt3="DSTV logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Partners;
