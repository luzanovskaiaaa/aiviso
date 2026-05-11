import type { MetadataRoute } from "next";

const SITE = "https://aiviso.ru";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`,            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE}/about`,       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/privacy`,     lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE}/terms`,       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE}/refund`,      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE}/consent`,     lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${SITE}/requisites`,  lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${SITE}/delivery`,    lastModified: now, changeFrequency: "yearly",  priority: 0.4 },
    { url: `${SITE}/auth`,        lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/blog`,        lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${SITE}/blog/foto-dlya-wildberries`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/razmery-foto-marketpleysov`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/ai-vs-fotograf`,                  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/infografika-dlya-marketpleysa`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/perenos-kartochek-wb-ozon`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/blog/ai-foto-pravila-marketpleysov`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/contacts`,                         lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/#how`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/#features`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/#pricing`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/#faq`,        lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
