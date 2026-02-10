"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FORMSPREE_ID = "mpwogyab";

export default function DiagnosticoPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone_whatsapp: "",
    sector: "",
    employees: "",
    province: "",
    multi_site: "No",
    has_sst_plan: "No estoy seguro",
    mtss_inspection: "No",
    needs: [] as string[],
    message: "",
  });

  const update = (k: keyof typeof form, v: any) => setForm((p) => ({ ...p, [k]: v }));
  const toggleNeed = (value: string) =>
    setForm((p) => ({
      ...p,
      needs: p.needs.includes(value) ? p.needs.filter((x) => x !== value) : [...p.needs, value],
    }));

  const validateStep = (s: 1 | 2 | 3) => {
    if (s === 1) return form.full_name && form.company_name && form.email && form.phone_whatsapp;
    if (s === 2) return form.sector && form.employees && form.province;
    return true;
  };

  const nextStep = () => {
    if (!validateStep(step)) return alert("Completa los campos requeridos antes de continuar.");
    setStep((p) => (p === 1 ? 2 : 3));
  };
  const prevStep = () => setStep((p) => (p === 3 ? 2 : 1));

  const onSubmitWizard = async () => {
    if (!validateStep(1) || !validateStep(2)) return alert("Faltan campos requeridos.");
    setLoading(true);
    try {
      const data = new FormData();
      Object.entries(form).forEach(([k, v]) => data.append(k, Array.isArray(v) ? v.join(", ") : String(v)));

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) setSubmitted(true);
      else alert("No se pudo enviar. Intenta nuevamente.");
    } catch {
      alert("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold">Diagnóstico SST gratuito</h1>
      <p className="mt-2 text-muted-foreground">
        Completa este diagnóstico por pasos. Te respondemos con un plan de acción y recomendación de alcance.
      </p>

      <div className="mt-8">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>{submitted ? "¡Enviado! ✅" : `Paso ${step} de 3`}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {submitted ? (
              <p className="text-sm text-muted-foreground">
                Recibimos tu solicitud. Te contactaremos por WhatsApp o correo.
              </p>
            ) : (
              <>
                {step === 1 && (
                  <div className="space-y-3">
                    <Input placeholder="Nombre y apellidos *" value={form.full_name} onChange={(e) => update("full_name", e.target.value)} />
                    <Input placeholder="Empresa *" value={form.company_name} onChange={(e) => update("company_name", e.target.value)} />
                    <Input type="email" placeholder="Correo *" value={form.email} onChange={(e) => update("email", e.target.value)} />
                    <Input placeholder="WhatsApp (+506) *" value={form.phone_whatsapp} onChange={(e) => update("phone_whatsapp", e.target.value)} />
                    <div className="flex justify-end">
                      <Button className="rounded-2xl" onClick={nextStep}>Continuar</Button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Sector *</label>
                    <select className="w-full h-10 rounded-md border bg-white px-3 text-sm" value={form.sector} onChange={(e) => update("sector", e.target.value)}>
                      <option value="">Seleccionar…</option>
                      <option>Restaurantes</option>
                      <option>Logística / Centros de distribución</option>
                      <option>Oficinas</option>
                      <option>Comercio</option>
                      <option>Construcción</option>
                      <option>Industria</option>
                      <option>Otro</option>
                    </select>

                    <label className="text-sm font-medium">Cantidad de colaboradores *</label>
                    <select className="w-full h-10 rounded-md border bg-white px-3 text-sm" value={form.employees} onChange={(e) => update("employees", e.target.value)}>
                      <option value="">Seleccionar…</option>
                      <option>1–10</option>
                      <option>11–30</option>
                      <option>31–50</option>
                      <option>51–100</option>
                      <option>Más de 100</option>
                    </select>

                    <Input placeholder="Provincia / Zona *" value={form.province} onChange={(e) => update("province", e.target.value)} />

                    <label className="text-sm font-medium">¿Varias sedes?</label>
                    <select className="w-full h-10 rounded-md border bg-white px-3 text-sm" value={form.multi_site} onChange={(e) => update("multi_site", e.target.value)}>
                      <option>No</option>
                      <option>Sí</option>
                    </select>

                    <div className="flex justify-between">
                      <Button
  className="rounded-2xl border bg-white text-slate-900 hover:bg-slate-50"
  onClick={prevStep}
>
  Atrás
</Button>
                      <Button className="rounded-2xl" onClick={nextStep}>Continuar</Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-3">
                    <label className="text-sm font-medium">¿Tiene Plan de Salud Ocupacional?</label>
                    <select className="w-full h-10 rounded-md border bg-white px-3 text-sm" value={form.has_sst_plan} onChange={(e) => update("has_sst_plan", e.target.value)}>
                      <option>Sí</option>
                      <option>No</option>
                      <option>No estoy seguro</option>
                    </select>

                    <label className="text-sm font-medium">¿Inspecciones MTSS?</label>
                    <select className="w-full h-10 rounded-md border bg-white px-3 text-sm" value={form.mtss_inspection} onChange={(e) => update("mtss_inspection", e.target.value)}>
                      <option>No</option>
                      <option>Sí</option>
                    </select>

                    <label className="text-sm font-medium">¿Qué necesita?</label>
                    <div className="space-y-2 text-sm">
                      {["Elaborar Plan de Salud Ocupacional","Actualizar documentación","Matriz de riesgos","Capacitaciones","Plan de emergencias","Auditoría / revisión"].map((x) => (
                        <label key={x} className="flex items-center gap-2">
                          <input type="checkbox" checked={form.needs.includes(x)} onChange={() => toggleNeed(x)} />
                          <span>{x}</span>
                        </label>
                      ))}
                    </div>

                    <Textarea placeholder="Comentarios adicionales (opcional)" value={form.message} onChange={(e) => update("message", e.target.value)} />

                    <div className="flex justify-between">
                      <Button variant="outline" className="rounded-2xl" onClick={prevStep}>Atrás</Button>
                      <Button className="rounded-2xl" onClick={onSubmitWizard} disabled={loading}>
                        {loading ? "Enviando..." : "Enviar diagnóstico"}
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
