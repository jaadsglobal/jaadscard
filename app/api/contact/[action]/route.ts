import { NextResponse } from "next/server";
import { contact } from "@/config/contact";
import { mailUrl, telUrl, whatsappUrl } from "@/utils/links";

const destinations = {
  whatsapp: () => whatsappUrl(contact),
  phone: () => telUrl(contact),
  email: () => mailUrl(contact),
  website: () => contact.website,
  linkedin: () => contact.linkedin,
  instagram: () => contact.instagram,
  calendar: () => contact.calendar,
};

type ContactAction = keyof typeof destinations;

export function GET(
  _request: Request,
  { params }: { params: Promise<{ action: string }> },
) {
  return params.then(({ action }) => {
    if (!(action in destinations)) {
      return NextResponse.json({ error: "Acción no encontrada" }, { status: 404 });
    }

    const destination = destinations[action as ContactAction]();
    if (!destination) {
      return NextResponse.json(
        { error: "Dato de contacto no configurado" },
        { status: 503 },
      );
    }

    return NextResponse.redirect(destination, 302);
  });
}
