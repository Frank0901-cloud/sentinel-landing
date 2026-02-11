
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentinel - Plan de Salud Ocupacional CR",
  description: "Cumple, protege y mejora — sin complicaciones.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
