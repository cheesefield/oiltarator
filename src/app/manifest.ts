import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OilTarator • Oil trading company",
    short_name: "OilTarator",
    icons: [
      {
        src: `${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: `${process.env.NEXT_PUBLIC_BASE_URL}/apple-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: `${process.env.NEXT_PUBLIC_BASE_URL}/icon.png`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#63b0b8",
    background_color: "#63b0b8",
    display: "standalone",
    scope: "/",
    start_url: "/",
  };
}
