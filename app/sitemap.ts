import type { MetadataRoute } from "next";
import { profile } from "@/config/profile";

const routes = ["", "/servicios"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${profile.metadata.canonical}${route}`,
    lastModified: new Date("2026-10-08"),
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
