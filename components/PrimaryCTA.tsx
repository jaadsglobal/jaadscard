import { CalendarCheck, ListChecks } from "lucide-react";
import type { Profile } from "@/config/profile";
import { ActionButton } from "./ActionButton";

type PrimaryCTAProps = {
  profile: Profile;
};

export function PrimaryCTA({ profile }: PrimaryCTAProps) {
  return (
    <section className="mt-3" aria-label="Reserva">
      <ActionButton
        href="/api/contact/calendar"
        icon={CalendarCheck}
        label="Reservar reunión"
        variant="accent"
        target="_blank"
        rel="noreferrer"
        aria-label={`Reservar reunión con ${profile.name}`}
        className="min-h-16 text-base"
      />
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
