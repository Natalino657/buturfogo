import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Root layout lives in app/[lang], so unmatched URLs need app/global-not-found.tsx.
    globalNotFound: true,
  },
  async redirects() {
    return [
      // Temporary (307) so the default language can change later without cached redirects.
      { source: "/", destination: "/pt", permanent: false },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
