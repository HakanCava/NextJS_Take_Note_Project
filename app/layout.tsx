import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NotAl",
  description: "Not alma uygulaması",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/hotionLight.png",
        href: "/hotionLight.png",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/hotionDark.png",
        href: "/hotionDark.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="hotion-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
