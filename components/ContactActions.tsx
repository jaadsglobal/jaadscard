import { Mail, Phone, MessageCircle } from "lucide-react";
import type { Profile } from "@/config/profile";
import { ActionButton } from "./ActionButton";

type ContactActionsProps = {
  profile: Profile;
};

export function ContactActions({ profile }: ContactActionsProps) {
  return (
    <section aria-label="Acciones de contacto" className="mt-6 grid grid-cols-3 gap-2.5">
      <ActionButton
        href="/api/contact/whatsapp"
        icon={MessageCircle}
        label="WhatsApp"
        aria-label="Abrir conversación de WhatsApp"
        target="_blank"
        rel="noreferrer"
        className="flex-col gap-1 px-1.5 text-xs"
      />
      <ActionButton
        href="/api/contact/phone"
        icon={Phone}
        label="Llamar"
        aria-label={`Llamar a ${profile.name}`}
        className="flex-col gap-1 px-1.5 text-xs"
      />
      <ActionButton
        href="/api/contact/email"
        icon={Mail}
        label="Email"
        aria-label={`Enviar email a ${profile.name}`}
        className="flex-col gap-1 px-1.5 text-xs"
      />
    </section>
  );
}
