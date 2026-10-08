import type { Profile } from "@/config/profile";
import type { Contact } from "@/config/contact";
import { whatsappUrl } from "@/utils/links";

function escapeVCard(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function splitName(profile: Profile) {
  if (profile.givenName || profile.familyName) {
    return {
      first: profile.givenName,
      last: profile.familyName,
    };
  }

  const fullName = profile.name;
  const parts = fullName.trim().split(/\s+/);
  const first = parts.shift() ?? "";
  const last = parts.join(" ");
  return { first, last };
}

export function createVCard(profile: Profile, contact: Contact) {
  const { first, last } = splitName(profile);
  const note = [
    profile.bio,
    contact.calendar ? `Reserva una reunión: ${contact.calendar}` : "",
    contact.whatsapp ? `WhatsApp: ${whatsappUrl(contact)}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(last)};${escapeVCard(first)};;;`,
    `FN:${escapeVCard(profile.name)}`,
    `TITLE:${escapeVCard(profile.role)}`,
    `ORG:${escapeVCard(profile.company)}`,
    `TEL;TYPE=CELL,VOICE:${contact.phone}`,
    `TEL;TYPE=WHATSAPP:${contact.whatsapp}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    contact.website ? `URL;TYPE=WORK:${contact.website}` : "",
    contact.linkedin ? `URL;TYPE=LinkedIn:${contact.linkedin}` : "",
    contact.instagram ? `URL;TYPE=Instagram:${contact.instagram}` : "",
    contact.calendar ? `URL;TYPE=Reserva:${contact.calendar}` : "",
    contact.whatsapp ? `URL;TYPE=WhatsApp:${whatsappUrl(contact)}` : "",
    contact.address ? `ADR;TYPE=WORK:;;${escapeVCard(contact.address)};;;;` : "",
    contact.linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${contact.linkedin}` : "",
    contact.instagram ? `X-SOCIALPROFILE;TYPE=instagram:${contact.instagram}` : "",
    note ? `NOTE:${escapeVCard(note)}` : "",
    "END:VCARD",
  ].filter(Boolean);

  return `${lines.join("\r\n")}\r\n`;
}

export function vCardFilename(profile: Profile) {
  const slug = profile.name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `${slug}.vcf`;
}
