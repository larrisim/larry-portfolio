import "../../styles/globals.css";
import Header from "../../components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://larry-portfolio-orcin.vercel.app"), // Required for resolving social preview images
  title: "Larry Chang | Composer | Audio Designer",
  description:
    "Larry Chang — Award-nominated composer & immersive audio designer crafting soundscapes for film, VR, and interactive experiences worldwide.",
  openGraph: {
    title: "Larry Chang | Composer | Audio Designer",
    description:
      "Larry Chang — Award-nominated composer & immersive audio designer crafting soundscapes for film, VR, and interactive experiences worldwide.",
    url: "/", // relative URL resolved using metadataBase
    siteName: "Larry Chang Portfolio",
    images: [
      {
        url: "/images/preview.png", // Place your social preview image in public/images/
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Larry Chang | Composer | Audio Designer",
    description:
      "Larry Chang — Award-nominated composer & immersive audio designer crafting soundscapes for film, VR, and interactive experiences worldwide.",
    images: ["/images/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa] text-[#222] min-h-screen font-sans">
        <Header />
        <main className="w-full px-6 mt-16 mx-auto">{children}</main>
      </body>
    </html>
  );
}
