export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo Sentinel" className="w-6 h-6 object-contain"/>
          <span>© {new Date().getFullYear()} Sentinel - Plan de Salud Ocupacional CR. Todos los derechos reservados.</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:opacity-80">Política de privacidad</a>
          <a href="#" className="hover:opacity-80">Términos</a>
        </div>
      </div>
    </footer>
  );
}
