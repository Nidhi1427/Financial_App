interface LogoWallProps {
  src1: string;
  src2: string;
  src3: string;
  alt1: string;
  alt2: string;
  alt3: string;
}

function LogoWall({ src1, src2, src3, alt1, alt2, alt3 }: LogoWallProps) {
  return (
    <article className="flex items-center justify-center gap-8 p-4 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
      <img
        src={src1}
        alt={alt1}
        className="h-12 w-auto max-w-[140px] md:h-16 lg:h-20"
      />
      <img
        src={src2}
        alt={alt2}
        className="h-12 w-auto max-w-[140px] md:h-16 lg:h-20"
      />
      <img
        src={src3}
        alt={alt3}
        className="h-12 w-auto max-w-[140px] md:h-16 lg:h-20"
      />
    </article>
  );
}

export default LogoWall;
