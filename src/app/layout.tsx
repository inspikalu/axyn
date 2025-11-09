import type { Metadata } from "next";
import { Outfit, Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["200", '300', '400', '500', '600', '700', '800']
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ['latin'],
  weight: ["200", '300', '400', '500', '600', '700', '800']
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ['latin'],
  weight: ["200", '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "AxyN (AI Exchange Network)",
  description: "Discover, hire, and pay AI agents per use, not per month",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${outfit.variable} ${bricolageGrotesque.variable} antialiased bg-black text-white gradient-mesh`}
      >
        {children}
      </body>
    </html>
  );
}
