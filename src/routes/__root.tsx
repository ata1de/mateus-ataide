import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";

import { Page } from "@/components/Chrome";
import { Marker } from "@/components/Marker";
import { PrefsProvider, THEME_BOOT, useCopy } from "@/lib/prefs";
import appCss from "../styles.css?url";

const SITE_URL = "https://mateusataide.com/";

const DESCRIPTION =
  "Mateus Ataide, a software engineer from Brazil building payments at Stone — and applied AI on the side.";

function NotFoundComponent() {
  const t = useCopy();
  return (
    <Page>
      <h1 className="text-xl font-medium tracking-[-0.02em] text-ink">{t.notFound.title}</h1>
      <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-ink-soft">{t.notFound.body}</p>
      <Link to="/" className="hl mt-6 inline-block text-base text-ink">
        {t.notFound.home}
      </Link>
    </Page>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <Page>
      <h1 className="text-xl font-medium tracking-[-0.02em] text-ink">This page didn't load</h1>
      <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-ink-soft">
        Something failed while rendering it. Try again, or go back to the home page.
      </p>
      <div className="mt-6 flex gap-6 text-base text-ink">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="hl"
        >
          Try again
        </button>
        <a href="/" className="hl">
          Go to the home page
        </a>
      </div>
    </Page>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mateus Ataide" },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: "Mateus Ataide" },
      { name: "theme-color", content: "#f6f6f4", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#171716", media: "(prefers-color-scheme: dark)" },
      { property: "og:site_name", content: "Mateus Ataide" },
      { property: "og:title", content: "Mateus Ataide" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}og.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mateus Ataide" },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}og.png` },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
        <HeadContent />
      </head>
      <body>
        <PrefsProvider>
          {children}
          <Marker />
        </PrefsProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
