import { useState } from "react";

/**
 * A 40px square tile identifying a company or school.
 *
 * /logos/<slug>.png is revealed once it is known to have decoded, and the
 * tinted monogram stands in until then — and permanently when there is no
 * file. So dropping a real logo into public/logos/ upgrades the tile with no
 * code change, and a missing one degrades to the monogram rather than a
 * broken-image glyph.
 *
 * Several of these logos ship with transparent backgrounds, so the monogram
 * has to be unmounted (not just covered) once one loads, or the letter shows
 * through the mark. The tile drops to a plain ground at the same time, since
 * the marks are drawn to sit on white.
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
      className={
        loaded
          ? "relative size-10 shrink-0 overflow-hidden rounded-[10px] border border-line bg-bg"
          : "relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-line bg-accent/45 text-[15px] font-bold text-ink/70 select-none"
      }
    >
      {!loaded && monogram}
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
