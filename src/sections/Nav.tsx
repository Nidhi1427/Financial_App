import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Kobodrop from "../assets/logos/FinApp_icon_logo.png";


function Nav() {
  const textLinkClasses = "text-gray-500 hover:text-gray-900 active:text-gray-400";
  const nav_links = [
    { href: "#features", label: "Features" },
    { href: "#partners", label: "Partners" },
    { href: "#reviews", label: "Reviews" },
  ];

  return (
    <Disclosure as="nav" className="bg-black shadow-sm">
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            {/* Logo & Desktop Nav */}
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <img src={Kobodrop} alt="FinApp logo" className="h-10 w-auto" />
              </a>
              <nav className="hidden lg:ml-10 lg:block lg:space-x-8">
                {nav_links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={textLinkClasses}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-xl bg-gray-800 px-6 py-3 text-white hover:bg-gray-900 active:bg-gray-600 lg:flex"
              >
                Install FinApp
              </a>
              
              <Disclosure.Button 
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-300 sm:hidden"
                aria-label="Toggle menu"
              >
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden bg-gray-50 border-t border-gray-200">
            <div className="px-4 pt-4 pb-3 space-y-1">
              {nav_links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-black hover:text-gray-900"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
