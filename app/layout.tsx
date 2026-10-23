import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Common Ground | Planting hope, growing change",
  description:
    "A better world starts with us. Seeking justice, nurturing peace, and empowering communities through grassroots action.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F4F3EE] text-[#14281D] selection:bg-[#D0EA87] selection:text-[#143323]">
        {children}
      </body>
    </html>
  );
}
