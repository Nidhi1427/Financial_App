import type { ButtonLinkProps } from "./ButtonLink";


function StoreLink({
  href,
  className,
  target,
  logo,
  upperText,
  lowerText,
}: ButtonLinkProps) 
{
  return (
    <a
      href={href}
      className={`flex items-center ${className || ""}`}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {logo && (
        <img
          src={logo}
          alt={`${lowerText ?? "store"} logo`}
          className="h-6 w-6 flex-shrink-0"
        />
      )}
      <div className="ml-2">
        {upperText && (
          <p className="text-xs text-black uppercase tracking-wide">
            {upperText}
          </p>
        )}
        {lowerText && (
          <p className="font-semibold text-black">
            {lowerText}
          </p>
        )}
      </div>
    </a>
  );
}

export default StoreLink;
