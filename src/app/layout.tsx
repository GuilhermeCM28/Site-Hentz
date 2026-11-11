import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const coolvetica = localFont({
  src: "./fonts/Coolvetica-Rg.otf",
  variable: "--font-coolvetica",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hentz | Energia & Mobilidade",
  description:
    "Soluções em energia solar e mobilidade elétrica para acompanhar você.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${coolvetica.className} ${coolvetica.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
