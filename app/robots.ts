import type { MetadataRoute } from "next";
import { profile } from "@/config/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${profile.metadata.canonical}/sitemap.xml`,
    host: profile.metadata.canonical,
  };
}
