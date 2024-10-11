export const metadata = {
  metadataBase: new URL("https://oiltarator.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "pl-PL": "/pl-PL",
      "cs-CZ": "/cs-CZ",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
