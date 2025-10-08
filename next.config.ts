import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Ne jamais mettre en cache le HTML (évite les pages périmées)
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store" },
        ],
      },
      {
        // Mettre fortement en cache les assets Next
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
