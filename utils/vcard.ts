import type { Profile } from "@/config/profile";
import type { Contact } from "@/config/contact";

const vcardTitle = "CEO & Fundador";

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
  const cardUrl = profile.metadata.canonical;

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCard(last)};${escapeVCard(first)};;;`,
    `FN:${escapeVCard(profile.name)}`,
    `TITLE:${escapeVCard(vcardTitle)}`,
    `ORG:${escapeVCard(profile.company)}`,
    `TEL;TYPE=CELL,VOICE:${contact.phone}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL:${cardUrl}`,
    `NOTE:${escapeVCard(profile.bio)}`,
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
