import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

import './translations/i18n' // ts => import './i18n.ts'
import { useTranslation } from "react-i18next";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta name="description" content="Profesjonalne biuro rachunkowe oferujące pełną księgowość, obsługę kadr i płac, rozliczenia ZUS, PIT, VAT, CIT dla firm. Sprawdź nas! Lokalizacja: Raszyn"/>
        <meta name="keywords" content="biuro księgowe, biuro rachunkowe, księgowość, księgi handlowe, jgd,  raszyn, pruszkow, powiat pruszkowski, powiat warszawski, usługi księgowe, kadry i płace, rozliczenia podatkowe, VAT, PIT, CIT, ZUS, KPiR, pełna księgowość, doradztwo podatkowe, księgowość dla firm"/>

        <meta name="robots" content="index, follow"/>
        <meta name="author" content="Twoja Nazwa Firmy"/>

        <meta property="og:title" content="Biuro Księgowe i Rachunkowe – Księgowość dla Firm"/>
        <meta property="og:description" content="Kompleksowa księgowość, kadry i płace, VAT, CIT, PIT, ZUS. Sprawdź nasze usługi księgowe."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.jmk.net.pl/"/>
        <meta property="og:image" content="https://www.jmk.net.pl/"/>

        <meta name="description" content="Profesjonalne biuro księgowe oferuje księgowość, usługi rachunkowe, kadry i płace, doradztwo podatkowe dla firm.. Sprawdź nas!" />
        <title>{t('PageTitle')}</title>
        
        <link rel="canonical" href="/prices"/>
        <link rel="ceny-biura-rachunkowego" href="http://localhost:5173/prices"/>
        <link rel="kontakt-z-biurem-rachunkowym" href="/contact"/>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
