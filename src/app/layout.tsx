import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GTM Growth System",
  description:
    "Transform manual prospecting into an automated acquisition machine. Generate 5-10 qualified meetings per week on autopilot. Reduce your CAC from $600 to $23.",
  openGraph: {
    title: "GTM Growth System",
    description:
      "Transform manual prospecting into an automated acquisition machine. Generate 5-10 qualified meetings per week on autopilot.",
    url: "https://gtmgrowthsystem.com",
    siteName: "GTM Growth System",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTM Growth System",
    description:
      "Transform manual prospecting into an automated acquisition machine.",
    creator: "@gtmgrowthsystem",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
                document.documentElement.style.colorScheme = 'dark';
              } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.style.colorScheme = 'light';
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
