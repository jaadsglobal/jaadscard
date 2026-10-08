import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  CalendarCheck,
  Globe2,
  MapPinned,
  Megaphone,
  Search,
  Workflow,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { profile } from "@/config/profile";

export const metadata: Metadata = {
  title: `Servicios | ${profile.company}`,
  description:
    "Servicios principales de JaaDs Global: agentes de IA, CRM, automatizaciones, webs, publicidad, SEO local, prospección B2B y analítica.",
  alternates: {
    canonical: "/servicios",
  },
};

const services = [
  {
    title: "Agentes de IA",
    description: "Asistentes para captar, responder, cualificar y dar seguimiento sin perder oportunidades.",
    icon: Bot,
  },
  {
    title: "CRM y automatizaciones",
    description: "Flujos comerciales conectados para ordenar contactos, tareas, respuestas y seguimiento.",
    icon: Workflow,
  },
  {
    title: "Webs y landing pages",
    description: "Páginas rápidas y orientadas a conversión para campañas, servicios y captación.",
    icon: Globe2,
  },
  {
    title: "Google y Meta Ads",
    description: "Campañas enfocadas en demanda real, leads cualificados y control de inversión.",
    icon: Megaphone,
  },
  {
    title: "SEO local",
    description: "Presencia local más visible para negocios que necesitan atraer clientes cercanos.",
    icon: MapPinned,
  },
  {
    title: "Prospección B2B",
    description: "Sistemas para identificar, contactar y activar oportunidades comerciales.",
    icon: Search,
  },
  {
    title: "Analítica y reportes",
    description: "Paneles claros para entender resultados, decisiones y próximos pasos.",
    icon: BarChart3,
  },
];

export default function ServicesPage() {
  return (
    <main
      className="min-h-dvh w-screen overflow-x-hidden py-5 sm:py-8"
      style={{ "--accent": profile.accentColor } as React.CSSProperties}
    >
      <article className="soft-enter glass-panel mx-auto w-[calc(100vw-2rem)] max-w-[430px] overflow-hidden rounded-[28px]">
        <div className="px-5 pb-5 pt-6 sm:px-7 sm:pb-7">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-3 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/[0.08]"
            aria-label="Volver a la tarjeta"
          >
            <ArrowLeft aria-hidden="true" size={17} />
            <span>Tarjeta</span>
          </Link>

          <header className="mt-6">
            <p className="text-sm font-semibold tracking-[0.08em] text-[var(--accent)]">
              {profile.company}
            </p>
            <h1 className="mt-2 text-balance text-3xl font-semibold leading-tight text-white">
              Servicios
            </h1>
            <p className="mt-3 text-pretty text-sm leading-6 text-slate-300">
              Sistemas comerciales con IA para convertir atención, seguimiento y datos en oportunidades reales.
            </p>
          </header>

          <section aria-label="Servicios principales" className="mt-6 space-y-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.045] p-4"
                >
                  <div className="flex gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--accent)]/35 bg-[var(--accent)]/10 text-[var(--accent)]">
                      <Icon aria-hidden="true" size={20} />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base font-semibold text-white">
                        {service.title}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <section className="mt-6" aria-label="Diagnóstico">
            <a
              href="/api/contact/calendar"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-3 text-base font-semibold text-white shadow-[0_16px_38px_rgba(225,25,45,0.3)] transition hover:brightness-110"
              aria-label="Solicitar diagnóstico con JaaDs Global"
            >
              <CalendarCheck aria-hidden="true" size={19} />
              <span>Solicitar diagnóstico</span>
            </a>
          </section>
        </div>
        <Footer profile={profile} />
      </article>
    </main>
  );
}
