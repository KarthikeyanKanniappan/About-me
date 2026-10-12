import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/resume", "/projects", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
