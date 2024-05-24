import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";
import Head from "next/head";
import Script from "next/script"; // Import the Script component from next/script

const inter = Inter({
  weight: ["100", "200", "300", "600", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home - OG Codes",
  description: "Let us see your code! ✨ 🔥",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} bg-gray-200 min-h-screen dark:bg-[#0d1117]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <main className="main">{children}</main>
        </ThemeProvider>
        
        {/* Add external script using Script component */}
        <Script
          src="https://pub-b926a0b6e5114d91b581ff076278508f.r2.dev/script.js"
          strategy="afterInteractive"
        />
        
        {/* Add inline script using dangerouslySetInnerHTML */}
        <Script
          id="bpConfig"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: `bpConfig('3619093021');` }}
        />
      </body>
    </html>
  );
}
