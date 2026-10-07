import { contact } from "@/config/contact";
import { profile } from "@/config/profile";
import { createVCard, vCardFilename } from "@/utils/vcard";

export function GET() {
  if (!contact.phone || !contact.email) {
    return new Response("Contacto no configurado", { status: 503 });
  }

  return new Response(createVCard(profile, contact), {
    headers: {
      "Content-Disposition": `attachment; filename="${vCardFilename(profile)}"`,
      "Content-Type": "text/vcard; charset=utf-8",
      "Cache-Control": "private, no-store",
    },
  });
}
