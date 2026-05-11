import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/app/",
          "/auth/",
          "/api/",
          "/_next/",
        ],
      },
      {
        userAgent: "Yandex",
        allow: ["/"],
        disallow: ["/app/", "/auth/", "/api/"],
      },
    ],
    sitemap: "https://aiviso.ru/sitemap.xml",
    host: "https://aiviso.ru",
  };
}
