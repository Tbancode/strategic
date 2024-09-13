import type { Metadata } from "next";
import "./globals.css";
import { Layout } from "@/components";

export const metadata: Metadata = {
  title: "Strategic Solutions Global",
  description: "Igniting LeadHERs, Transforming LeadHERship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
