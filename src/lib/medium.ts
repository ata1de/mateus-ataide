import { createServerFn } from "@tanstack/react-start";

export type Post = {
  title: string;
  url: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD), formatted per locale at render time. */
  date: string;
  image?: string;
};

export const MEDIUM_PROFILE = "https://medium.com/@mateusataide05";

const FEED_URL = "https://medium.com/feed/@mateusataide05";
const MAX_POSTS = 4;
const TTL_MS = 60 * 60 * 1000;
const TIMEOUT_MS = 5000;

/**
 * Cached across requests. On Fluid Compute the function instance is reused, so
 * this spares Medium a fetch on nearly every render; a cold instance just
 * refetches.
 */
let cache: { at: number; posts: Post[] } | null = null;

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decode(text: string) {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (whole, name) => ENTITIES[name.toLowerCase()] ?? whole);
}

function stripTags(html: string) {
  return decode(html.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function pick(item: string, tag: string) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!match) return "";
  const raw = match[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*)\]\]>$/);
  return (cdata ? cdata[1] : raw).trim();
}

function truncate(text: string, limit = 200) {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : limit).replace(/[.,;:—-]$/, "")}…`;
}

export function parseFeed(xml: string): Post[] {
  const items = xml.split("<item>").slice(1);

  return items.slice(0, MAX_POSTS).flatMap((item) => {
    const title = stripTags(pick(item, "title"));
    // Medium appends tracking params to feed links.
    const url = pick(item, "link").split("?")[0];
    if (!title || !url) return [];

    const body = pick(item, "content:encoded");

    // Every item opens with an optional heading and figure, then the prose —
    // so the first paragraph is the excerpt. Skip one that merely repeats the
    // title, which some posts do.
    const paragraphs = [...body.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map((match) => stripTags(match[1]))
      .filter(Boolean);
    const normalise = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const excerpt = paragraphs.find((p) => !normalise(p).startsWith(normalise(title).slice(0, 24)));

    const published = Date.parse(pick(item, "pubDate"));

    return [
      {
        title,
        url,
        excerpt: truncate(excerpt ?? paragraphs[0] ?? ""),
        date: Number.isNaN(published) ? "" : new Date(published).toISOString().slice(0, 10),
        image: body.match(/<img[^>]+src="([^"]+)"/)?.[1],
      },
    ];
  });
}

/**
 * Reads the Medium feed. Never throws: the writing section is a nice-to-have,
 * so a failure serves the last good response, or nothing at all — the section
 * hides itself and the profile link in the footer still stands.
 */
export const getPosts = createServerFn({ method: "GET" }).handler(async (): Promise<Post[]> => {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.posts;

  try {
    const response = await fetch(FEED_URL, {
      headers: { accept: "application/rss+xml, application/xml" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) throw new Error(`medium feed responded ${response.status}`);

    const posts = parseFeed(await response.text());
    cache = { at: Date.now(), posts };
    return posts;
  } catch (error) {
    console.error("medium feed unavailable", error);
    return cache?.posts ?? [];
  }
});
