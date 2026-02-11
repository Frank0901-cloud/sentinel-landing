
'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ShieldCheck, ClipboardList, HardHat, Building2, Workflow, Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

const BRAND_NAME = "Sentinel - Plan de Salud Ocupacional CR";
const BRAND_SLOGAN = "Cumple, protege y mejora — sin complicaciones.";
const WHATSAPP = "https://wa.me/50671038336?text=Hola%20quiero%20informaci%C3%B3n%20sobre%20Planes%20de%20Salud%20Ocupacional";
const CONTACT_EMAIL = "fperez@sentinel.co.cr";
const SERVICE_AREAS = "Cobertura nacional – Costa Rica";
const FORMSPREE_ID = "mpwogyab";

const IMAGES = {
  hero: "/images/hero-sst.jpg",
  incluye: "/images/incluye-documentos.jpg",
  proceso: "/images/proceso-capacitacion.jpg",
  contacto: "/images/contacto-equipo.jpg",
  sectores: ["/images/sector-industria.jpg","/images/sector-oficinas.jpg","/images/sector-logistica.jpg"]
};

export default function Page(){
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: "POST", body: data, headers: { "Accept": "application/json" } });
      if (res.ok) setSubmitted(true); else alert("No se pudo enviar el formulario. Intenta nuevamente.");
    } catch (e) { alert("Error de conexión al enviar el mensaje."); }
  };

  const Feature = ({ icon: Icon, title, desc }: any) => (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="space-y-2">
        <div className="w-12 h-12 rounded-full grid place-items-center bg-slate-100">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">{desc}</CardContent>
    </Card>
  );

  const Item = ({ text }: any) => (
    <div className="flex items-start gap-2">
      <CheckCircle className="mt-0.5 w-5 h-5" />
      <span>{text}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* NAV */}

      
      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="rounded-full text-xs px-3 py-1">Especialistas en Costa Rica</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Planes de Salud Ocupacional diseñados para tu empresa
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Implementamos y documentamos tu Plan de Salud Ocupacional conforme a la normativa costarricense y las mejores prácticas (alineado a ISO 45001), para que puedas cumplir, prevenir riesgos y cuidar a tu gente.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#precios"><Button className="rounded-2xl">Ver planes y precios</Button></a>
              <a href="#contacto"><Button className="rounded-2xl" style={{background:"transparent",color:"#0F172A",border:"1px solid #0F172A"}}>Solicitar diagnóstico gratuito</Button></a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Cumplimiento normativo</div>
              <div className="flex items-center gap-2"><ClipboardList className="w-4 h-4"/> Documentación completa</div>
              <div className="flex items-center gap-2"><HardHat className="w-4 h-4"/> Enfoque preventivo</div>
            </div>
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src={IMAGES.hero} alt="Equipo con EPP durante auditoría de SST en Costa Rica" loading="lazy" className="w-full h-[320px] md:h-[420px] object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={ShieldCheck} title="Cumplimiento sin estrés" desc="Te guiamos paso a paso para cumplir con la normativa nacional y auditorías internas/externas." />
          <Feature icon={Workflow} title="Implementación ágil" desc="Metodología práctica: diagnóstico, plan, capacitación, seguimiento y mejora." />
          <Feature icon={Building2} title="Para todo sector" desc="Industria, comercio, alimentos, logística, construcción, oficinas y más." />
        </div>
      </section>

      {/* INCLUYE */}
      <section id="incluye" className="bg-white/60 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">¿Qué incluye el Plan de Salud Ocupacional?</h2>
            <p className="mt-2 text-slate-600">Entregables tipo "llave en mano" con plantillas editables y alineados a ISO 45001.</p>
            <div className="mt-6 grid gap-3 text-sm">
              <Item text="Política de SST y objetivos" />
              <Item text="Matriz de peligros y evaluación de riesgos" />
              <Item text="Programa anual de Salud Ocupacional" />
              <Item text="Procedimientos y formatos (accidentes, incidentes, inspecciones)" />
              <Item text="Plan de emergencias y respuesta (coordinación con CNE/Comité)" />
              <Item text="Capacitaciones clave y registro de asistencia" />
              <Item text="Indicadores y reporte a Dirección (alineado a ISO 45001)" />
              <Item text="Checklist de cumplimiento y auditoría interna" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-2xl overflow-hidden shadow"><img src={IMAGES.incluye} alt="Documentación del Plan de Salud Ocupacional: matrices, programas y formatos" loading="lazy" className="w-full h-[240px] md:h-[300px] object-cover"/></div>
            <div className="rounded-2xl overflow-hidden shadow"><img src={IMAGES.proceso} alt="Capacitación práctica en seguridad y salud" loading="lazy" className="w-full h-[180px] md:h-[220px] object-cover"/></div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          {["Diagnóstico", "Plan y documentos", "Capacitación", "Seguimiento"].map((etapa, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="inline-flex w-7 h-7 rounded-full bg-slate-900 text-white items-center justify-center text-sm">{i+1}</span>
                  {etapa}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                {i === 0 && (<>Levantamos información, visitamos sitio (presencial o remoto) y definimos prioridades.</>)}
                {i === 1 && (<>Entregamos matrices, programas y formatos listos, personalizados a tu operación.</>)}
                {i === 2 && (<>Sesiones prácticas con tu equipo y Comité de Salud Ocupacional.</>)}
                {i === 3 && (<>Indicadores, auditoría interna y mejora continua para mantener el cumplimiento.</>)}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SECTORES – MOSAICO VISUAL */}
      <section id="sectores" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Sectores que atendemos</h2>
        <p className="text-center text-slate-600 mt-2">Industria, oficinas y logística — cobertura nacional.</p>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {IMAGES.sectores.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow">
              <img src={src} alt={i===0?"Industria segura con EPP": i===1?"Oficinas y ergonomía": "Logística y bodegas"} loading="lazy" className="w-full h-[220px] md:h-[260px] object-cover"/>
            </div>
          ))}
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="bg-white/60 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Planes y precios</h2>
          <p className="text-center text-slate-600 mt-2">Valores de referencia. Cotizamos según tamaño, riesgos y ubicación.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { nombre: "Esencial", precio: "Desde $490", puntos: ["Diagnóstico y plan base", "Documentación mínima requerida", "1 capacitación", "Plantillas editables"], destacado: false },
              { nombre: "Profesional", precio: "Desde $890", puntos: ["Plan completo personalizado", "Matriz de riesgos + indicadores", "2 capacitaciones", "Auditoría interna inicial"], destacado: true },
              { nombre: "Integral", precio: "Desde $1,490", puntos: ["Todo el plan + emergencias", "Capacitaciones ilimitadas (mes 1)", "Acompañamiento 3 meses", "Implementación digital de formatos"], destacado: false },
            ].map((p, idx) => (
              <Card key={idx} className={`rounded-2xl ${p.destacado ? 'border-2 border-slate-900' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{p.nombre}</span>
                    {p.destacado && <Badge className="rounded-full">Recomendado</Badge>}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-semibold">{p.precio}</div>
                  <div className="mt-4 grid gap-2 text-sm">
                    {p.puntos.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2"><CheckCircle className="w-5 h-5"/><span>{pt}</span></div>
                    ))}
                  </div>
                  <a href="#contacto"><Button className="w-full mt-6 rounded-2xl">Solicitar cotización</Button></a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Preguntas frecuentes</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
          <Card className="rounded-2xl"><CardHeader><CardTitle>¿Cumple con la normativa costarricense?</CardTitle></CardHeader><CardContent>El plan se elabora conforme a los lineamientos nacionales vigentes y se alinea a buenas prácticas internacionales (ISO 45001). Incluye evidencia documental para inspecciones.</CardContent></Card>
          <Card className="rounded-2xl"><CardHeader><CardTitle>¿Cuánto tiempo toma?</CardTitle></CardHeader><CardContent>Para pymes típicas, el plan base puede estar en 1–2 semanas hábiles tras el diagnóstico. Proyectos más complejos requieren más tiempo.</CardContent></Card>
          <Card className="rounded-2xl"><CardHeader><CardTitle>¿Dan capacitaciones?</CardTitle></CardHeader><CardContent>Sí. Incluimos sesiones para colaboradores y Comité, con materiales y listas de asistencia.</CardContent></Card>
          <Card className="rounded-2xl"><CardHeader><CardTitle>¿Trabajan en todo el país?</CardTitle></CardHeader><CardContent>{SERVICE_AREAS}. También ofrecemos modalidad 100% remota cuando aplica.</CardContent></Card>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-white/60 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Conversemos</h2>
            <p className="text-slate-600">Agenda una llamada o envíanos un mensaje. Te orientamos sin costo sobre el camino más rápido para cumplir.</p>
            <div className="grid gap-3 text-sm">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> WhatsApp: <a className="underline" href={WHATSAPP} target="_blank" rel="noopener noreferrer">+506 7103-8336</a></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> Correo: <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {SERVICE_AREAS}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4"/> L–V 8:00–17:00</div>
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Escríbenos</CardTitle>
            </CardHeader>
            <CardContent>
              {!submitted ? (
                <form onSubmit={onSubmit} className="grid gap-3">
                  <Input name="nombre" placeholder="Nombre y apellidos" required/>
                  <Input name="correo" type="email" placeholder="Correo" required/>
                  <Textarea name="mensaje" placeholder="Mensaje" rows={5} required/>
                  <Button type="submit" className="rounded-2xl">Enviar mensaje</Button>
                  <p className="text-xs text-slate-500">Protegemos tus datos. Solo usaremos tu información para contactarte.</p>
                </form>
              ) : (
                <div className="text-center space-y-2">
                  <ShieldCheck className="w-10 h-10 mx-auto" />
                  <p className="font-medium">¡Recibido! Te contactaremos por correo en breve.</p>
                  <p className="text-sm text-slate-600">Si lo prefieres, escríbenos ahora por WhatsApp.</p>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-2xl mt-2">Abrir WhatsApp</Button>
                  </a>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RECURSOS OFICIALES – COSTA RICA */}
      <section id="recursos" className="bg-white/60 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">Recursos oficiales – Costa Rica</h2>
          <p className="text-center text-slate-600 mt-2">
            Guías y normativa de referencia para Planes de Salud Ocupacional y Emergencias.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {/* ISO 45001: colócala en /public/docs/ISO45001.pdf si decides alojarla */}
            <a href="/docs/ISO45001.pdf" target="_blank" rel="noopener" className="block">
              <Card className="hover:shadow-lg transition">
                <CardHeader><CardTitle>ISO 45001 – Sistema de Gestión de SST (PDF)</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Norma internacional para la gestión de la seguridad y salud en el trabajo.
                </CardContent>
              </Card>
            </a>

            <a href="https://www.cne.go.cr/reduccion_riesgo/biblioteca/planes/planes_de_emergencia.aspx" target="_blank" rel="noopener" className="block">
              <Card className="hover:shadow-lg transition">
                <CardHeader><CardTitle>CNE – Biblioteca de Planes de Emergencia</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Guías y ejemplos para elaborar planes de emergencia y reducción del riesgo.
                </CardContent>
              </Card>
            </a>

            <a href="https://www.mtss.go.cr/elministerio/despacho/decretos/Politica%20Nacional%20de%20Salud%20Ocupacional.pdf" target="_blank" rel="noopener" className="block">
              <Card className="hover:shadow-lg transition">
                <CardHeader><CardTitle>MTSS – Política Nacional de Salud Ocupacional (PDF)</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Marco orientador de la salud ocupacional en Costa Rica.
                </CardContent>
              </Card>
            </a>

            <a href="https://cso.go.cr/legislacion/decretos_normativa_reglamentaria/Decreto%20Ejecutivo%20No45166%20del%2013%20de%20junio%20de%202025.pdf" target="_blank" rel="noopener" className="block">
              <Card className="hover:shadow-lg transition">
                <CardHeader><CardTitle>Decreto Ejecutivo 45166-MTSS (2025)</CardTitle></CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Regula comisiones y oficinas de Salud Ocupacional (deroga 39408-MTSS).
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      
      {/* FLOTANTE CTA */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full shadow-lg bg-slate-900 text-white px-5 py-3">
        <span className="hidden md:inline">Chatear ahora</span>
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
}
