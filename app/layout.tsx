import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Portifolio",
  description: "Modern & Minimalist Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
