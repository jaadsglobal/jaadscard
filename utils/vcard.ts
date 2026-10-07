import type { Profile } from "@/config/profile";
import type { Contact } from "@/config/contact";

function escapeVCard(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const first = parts.shift() ?? "";
  const last = parts.join(" ");
  return { first, last };
}

export function createVCard(profile: Profile, contact: Contact) {
  const { first, last } = splitName(profile.name);
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
    `URL:${contact.website}`,
    `ADR;TYPE=WORK:;;${escapeVCard(contact.address)};;;;`,
    `X-SOCIALPROFILE;TYPE=linkedin:${contact.linkedin}`,
    `X-SOCIALPROFILE;TYPE=instagram:${contact.instagram}`,
    "END:VCARD",
  ];

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
