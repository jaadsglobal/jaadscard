import { Download } from "lucide-react";
import type { Profile } from "@/config/profile";

type SaveContactButtonProps = {
  profile: Profile;
};

export function SaveContactButton({ profile }: SaveContactButtonProps) {
  return (
    <form action="/api/contact/vcard" className="min-w-0">
      <button
        type="submit"
        className="flex min-h-14 w-full min-w-0 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.09]"
        aria-label={`Guardar contacto de ${profile.name}`}
      >
        <Download aria-hidden="true" size={18} />
        <span className="min-w-0 truncate">Guardar contacto</span>
      </button>
    </form>
  );
}
