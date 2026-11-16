import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/** /robots.txt: everything may be crawled; points search engines to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
