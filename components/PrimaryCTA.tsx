import { CalendarCheck, ListChecks } from "lucide-react";
import type { Profile } from "@/config/profile";
import { ActionButton } from "./ActionButton";

type PrimaryCTAProps = {
  profile: Profile;
};

export function PrimaryCTA({ profile }: PrimaryCTAProps) {
  return (
    <section className="mt-3" aria-label="Diagnóstico">
      <ActionButton
        href="/api/contact/calendar"
        icon={CalendarCheck}
        label="Solicitar diagnóstico"
        variant="accent"
        target="_blank"
        rel="noreferrer"
        aria-label={`Solicitar diagnóstico con ${profile.name}`}
        className="min-h-16 text-base"
      />
      <p className="mt-2 text-center text-xs font-medium text-slate-400">
        30 min · Analizamos tu proceso comercial
      </p>
      <ActionButton
        href="/servicios"
        icon={ListChecks}
        label="Ver servicios"
        aria-label="Ver servicios de JaaDs Global"
        className="mt-3 min-h-14 text-base"
      />
    </section>
  );
}
