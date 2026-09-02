import { useState } from "react";

/**
 * A 40px square tile identifying a company or school.
 *
 * A tinted monogram is what actually renders; /logos/<slug>.png is layered on
 * top and only revealed once it is known to have decoded. So dropping real
 * logos into public/logos/ upgrades the look with no code change, and a
 * missing file degrades to the monogram instead of a broken-image glyph.
 *
 * The reveal is driven by a ref callback rather than onLoad alone: under SSR
 * the image often settles before React hydrates, and that load event is lost.
 */
export function LogoTile({ slug, name }: { slug: string; name: string }) {
  const [loaded, setLoaded] = useState(false);

  const monogram = (name.replace(/[^\p{L}\p{N}]/gu, "").charAt(0) || "•").toUpperCase();

  return (
    <div
      aria-hidden
      className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-line bg-accent/45 text-[15px] font-bold text-ink/70 select-none"
    >
      {monogram}
      <img
        src={`/logos/${slug}.png`}
        alt=""
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setLoaded(true);
        }}
        onLoad={(event) => {
          if (event.currentTarget.naturalWidth > 0) setLoaded(true);
        }}
        className={
          loaded
            ? "absolute inset-0 size-full object-cover"
            : "absolute inset-0 size-full object-cover opacity-0"
        }
      />
    </div>
  );
}
