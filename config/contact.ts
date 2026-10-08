import "server-only";

const env = (key: string) => process.env[key]?.trim() ?? "";

export const contact = {
  phone: env("CONTACT_PHONE"),
  whatsapp: env("CONTACT_WHATSAPP") || env("CONTACT_PHONE"),
  email: env("CONTACT_EMAIL"),
  website: env("CONTACT_WEBSITE"),
  linkedin: env("CONTACT_LINKEDIN"),
  instagram: env("CONTACT_INSTAGRAM"),
  calendar: env("CONTACT_CALENDAR"),
  address: env("CONTACT_ADDRESS"),
};

export type Contact = typeof contact;
