import React from "react";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://oiltarator.com"
  ),
  title: "OilTarator",
  description:
    "Trading company operating extensively in the technical vegetable oil trade industry in Ostrava.",
  openGraph: {
    title: "OilTarator",
    url: "/",
    images: [
      {
        url: "/opengraph-image.png",
        width: 800,
        height: 600,
        alt: "OilTarator Social Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OilTarator",
    description:
      "Trading company operating extensively in the technical vegetable oil trade industry in Ostrava.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}