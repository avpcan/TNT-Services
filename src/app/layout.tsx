import type { Metadata } from "next";
import { business } from "../content/business";
import "./globals.css";

export const metadata: Metadata = {
  title: `${business.name} | Property Services & RV Repair`,
  description: `Landscaping, site clearing, junk removal, material delivery, seasonal cleanup, RV repair and more in ${business.serviceArea}.`,
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-6 focus:py-3">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
