// StoreLinks.tsx
import AppleLogo from "../assets/logos/app_store.svg";
import GooglePlay from "../assets/logos/google_play.svg";
import GooglePlayBright from "../assets/logos/google_play_bright.svg";
import StoreLink from "../common/storelink"; // use the actual filename casing

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
          className="flex items-center gap-3 rounded-lg bg-orange-500 px-6 py-3 text-white hover:bg-orange-600 active:bg-orange-700 transition-colors"
        />
        <StoreLink
          href="https://play.google.com/store/apps"
          upperText="Get it on "
          lowerText="Google Play"
          logo={GooglePlay}
          target="_blank"
          className="my-4 flex items-center gap-3 rounded-lg border-2 border-orange-500 bg-transparent px-4 py-2 text-orange-500 hover:bg-orange-500 hover:text-white active:bg-orange-600 transition-colors"
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
          className="my-4 flex items-center gap-3 rounded-lg border-2 border-orange-500 bg-transparent px-4 py-2 text-white hover:bg-orange-950 active:bg-orange-800 transition-colors"
        />
        <StoreLink
          href="https://play.google.com/store/apps"
          upperText="Get it on "
          lowerText="Google Play"
          logo={GooglePlayBright}
          target="_blank"
          className="my-4 flex items-center gap-3 rounded-lg border-2 border-orange-500 bg-transparent px-4 py-2 text-white hover:bg-orange-950 active:bg-orange-800 transition-colors"
        />
      </>
    );
  }

  return null;
}

export default StoreLinks;
