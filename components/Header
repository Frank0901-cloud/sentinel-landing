"use client";

import { Button } from "@/components/ui/button";

const BRAND_NAME = "Sentinel - Plan de Salud Ocupacional CR";
const BRAND_SLOGAN = "Cumple, protege y mejora — sin complicaciones.";
const WHATSAPP = "https://wa.me/50671038336";

export default function Header() {
  return (
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
  );
}
