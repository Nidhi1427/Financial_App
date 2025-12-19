// StoreLinks.tsx - LIGHTER BLUE BANKING THEME
import AppleLogo from "../assets/logos/app_store.svg";
import GooglePlay from "../assets/logos/google_play.svg";
import GooglePlayBright from "../assets/logos/google_play_bright.svg";
import StoreLink from "../common/storelink";

interface StoreLinksProps {
  type: "Standard" | "Variant";
}

function StoreLinks({ type }: StoreLinksProps) {
  if (type === "Standard") {
    return (
      <div className="mt-10 flex justify-center space-x-4 md:justify-start">
        <StoreLink
          href="https://www.apple.com/app-store/"
          upperText="Download on the "
          lowerText="App Store"
          logo={AppleLogo}
          target="_blank"
          className="flex items-center gap-3 rounded-lg bg-blue-400 px-6 py-3 text-white hover:bg-blue-500 active:bg-blue-600 transition-colors shadow-lg"
        />
        <StoreLink
          href="https://play.google.com/store/apps"
          upperText="Get it on "
          lowerText="Google Play"
          logo={GooglePlay}
          target="_blank"
          className="my-4 flex items-center gap-3 rounded-lg border-2 border-blue-400 bg-transparent px-4 py-2 text-blue-400 hover:bg-blue-400 hover:text-white active:bg-blue-500 transition-colors shadow-lg"
        />
      </div>
    );
  }

  if (type === "Variant") {
    return (
      <>
        <StoreLink
          href="https://www.apple.com/app-store/"
          upperText="Download on the "
          lowerText="App Store"
          logo={AppleLogo}
          target="_blank"
          className="my-4 flex items-center gap-3 rounded-lg border-2 border-blue-400/70 bg-transparent px-4 py-2 text-white hover:bg-blue-400/20 active:bg-blue-400/30 transition-colors shadow-lg"
        />
        <StoreLink
          href="https://play.google.com/store/apps"
          upperText="Get it on "
          lowerText="Google Play"
          logo={GooglePlayBright}
          target="_blank"
          className="my-4 flex items-center gap-3 rounded-lg border-2 border-blue-400/70 bg-transparent px-4 py-2 text-white hover:bg-blue-400/20 active:bg-blue-400/30 transition-colors shadow-lg"
        />
      </>
    );
  }

  return null;
}

export default StoreLinks;
