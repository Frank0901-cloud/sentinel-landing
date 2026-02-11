
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
      export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {/* HEADER GLOBAL */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo Sentinel" className="w-10 h-10 object-contain rounded-xl"/>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold">{BRAND_NAME}</span>
              <span className="text-xs text-slate-500">{BRAND_SLOGAN}</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#beneficios" className="hover:opacity-80">Beneficios</a>
            <a href="#incluye" className="hover:opacity-80">¿Qué incluye?</a>
            <a href="#proceso" className="hover:opacity-80">Proceso</a>
            <a href="#precios" className="hover:opacity-80">Planes</a>
            <a href="#recursos" className="hover:opacity-80">Recursos</a>
           <a href="/diagnostico">
  <Button className="rounded-2xl">Diagnóstico por pasos</Button>
</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <a href="#contacto" className="hover:opacity-80">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-2xl">Hablar por WhatsApp</Button>
            </a>
          </div>
        </div>
      </header>

        {/* CONTENIDO DE CADA PÁGINA */}
        {children}

        {/* FOOTER GLOBAL */}
        <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo Sentinel" className="w-6 h-6 object-contain"/>
            <span>© {new Date().getFullYear()} {BRAND_NAME}. Todos los derechos reservados.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80">Política de privacidad</a>
            <a href="#" className="hover:opacity-80">Términos</a>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}

    </html>
  );
}
