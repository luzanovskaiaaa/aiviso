import type { Metadata } from "next";
import { Inter, Manrope, Onest, Montserrat, Unbounded, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import { FAQ_JSONLD } from "@/components/faqData";
import CookieBanner from "@/components/CookieBanner";
import ToastHost from "@/components/ToastHost";
import "./globals.css";

// UI-шрифт по умолчанию — preload для быстрого FCP. Manrope теперь основной шрифт UI/лендинга.
const manrope = Manrope({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-manrope", display: "swap" });
// Display-шрифт для заголовков лендинга — Bricolage Grotesque, italic для акцентов.
const bricolage = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], variable: "--font-bricolage", display: "swap" });
// Прочие шрифты — preload: false (грузятся по требованию для overlay-редактора).
const inter = Inter({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-inter", display: "swap", preload: false });
const onest = Onest({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-onest", display: "swap", preload: false });
const montserrat = Montserrat({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-montserrat", display: "swap", preload: false });
const unbounded = Unbounded({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-unbounded", display: "swap", preload: false });

const SITE_URL = "https://aiviso.ru";
const SITE_NAME = "Aiviso";
const SITE_TITLE = "Aiviso — AI-фото для карточек Wildberries и Ozon за 2 минуты";
const SITE_DESC = "AI-генератор фото товаров для Wildberries и Ozon. Сохраняет все детали — пуговицы, швы, фактуру. 10 кредитов бесплатно при регистрации.";
const SITE_LAUNCH = "2026-04-26";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Aiviso",
  },
  description: SITE_DESC,
  keywords: [
    "AI фото товара",
    "генератор фото для Wildberries",
    "фото для Ozon",
    "карточка маркетплейса",
    "нейросеть для селлера",
    "Nano Banana Pro",
    "Gemini 3 Pro Image",
    "AI карточка товара",
    "фотосессия для маркетплейса",
    "WB карточка фото",
    "Ozon карточка фото",
    "фото без фотографа",
  ],
  authors: [{ name: "Aiviso" }],
  creator: "Aiviso",
  publisher: "Aiviso",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Aiviso — AI-фото для маркетплейсов" }],
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    images: ["/og.png"],
  },
  verification: {
    // Я.Вебмастер
    yandex: "b1edf44d025bd5e6",
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
  // Регион для Яндекса — РФ. Помогает в геолокализованных запросах.
  other: {
    "geo.region": "RU",
    "geo.placename": "Россия",
  },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aiviso",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESC,
  foundingDate: SITE_LAUNCH,
  sameAs: [],
};

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Aiviso",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE_DESC,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "RUB",
    availability: "https://schema.org/InStock",
    description: "10 кредитов бесплатно при регистрации",
  },
  url: SITE_URL,
  inLanguage: "ru-RU",
  datePublished: SITE_LAUNCH,
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aiviso",
  url: SITE_URL,
  inLanguage: "ru-RU",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const YM_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} ${bricolage.variable} ${onest.variable} ${montserrat.variable} ${unbounded.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.aiviso.ru" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
        />
      </head>
      <body className={manrope.className}>
        {children}
        <ToastHost />
        <CookieBanner />
        {YM_ID && (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
              ym(${YM_ID}, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true });`}
            </Script>
            <noscript>
              <div>
                <img src={`https://mc.yandex.ru/watch/${YM_ID}`} style={{ position: "absolute", left: "-9999px" }} alt="" />
              </div>
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
