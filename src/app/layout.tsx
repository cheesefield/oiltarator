export const metadata = {
  metadataBase: new URL("https://oiltarator.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      pl: "/pl",
      cs: "/cs",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
