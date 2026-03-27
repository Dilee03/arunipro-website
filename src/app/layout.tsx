import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils/cn";
import { TopBar } from "@/components/layout/TopBar";
import { Toaster } from 'sonner';
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Arun iPro Services | Tax Preparation & Accounting in Toronto",
  description: "Expert tax preparation, accounting, and consulting services across all Canadian provinces. Two Toronto locations. Book your appointment today.",
  keywords: "tax preparation Toronto, accounting services Scarborough, corporate tax, personal tax, international student tax",
  authors: [{ name: "Arun iPro Services" }],
  openGraph: {
    title: "Arun iPro Services – Tax & Accounting",
    description: "365 days a year tax services for all Canadian provinces.",
    url: "https://arunipro.com",
    siteName: "Arun iPro Services",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, poppins.variable)}>
      <body className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <Toaster position="top-right" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}