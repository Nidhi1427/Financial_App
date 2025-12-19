import KobodropLight from "../assets/logos/kobodrop_logo_bright.png";
import StoreLinks from "../common/StoreLinks";
import Twitter from "../assets/logos/icons8-twitterx.svg";
import Facebook from "../assets/logos/icons8-facebook.svg";
import Linkedin from "../assets/logos/icons8-linkedin.svg";

function Footer() {
  return (
    <section className="bg-gradient-to-r from-blue-900/80 via-indigo-900/60 to-slate-900/70">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div>
            <img
              className="mb-4 w-36"
              src={KobodropLight}
              alt="light version of FinApp logo"
            />
            <p className="text-gray-200 mb-6">Start spending the smart way</p>

            <div className="flex gap-10">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400 mb-2">Products</p>
                <a href="#" className="hover:text-blue-300 transition-colors">Overview</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Features</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Solutions</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Contact</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Releases</a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-gray-400 mb-2">Resources</p>
                <a href="#" className="hover:text-blue-300 transition-colors">Blog</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Newsletter</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Events</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Help Centre</a>
                <a href="#" className="hover:text-blue-300 transition-colors">Support</a>
              </div>
            </div>

            <div className="mt-8 w-fit">
              <h2 className="mb-2 text-lg font-semibold text-white">
                Get the app
              </h2>
              <StoreLinks type="Variant" />
            </div>

            <div className="mt-14 flex items-center justify-between border-t-2 border-white/20 pt-10">
              <p className="w-[16ch] text-white/80 md:w-full">
                &copy; 2025 FinApp. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <img src={Twitter} alt="Twitter logo" className="hover:scale-110 transition-transform" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src={Facebook} alt="Facebook logo" className="hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <img src={Linkedin} alt="Linkedin logo" className="hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
