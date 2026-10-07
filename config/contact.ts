import "server-only";

export const contact = {
  phone: process.env.CONTACT_PHONE ?? "",
  whatsapp: process.env.CONTACT_WHATSAPP ?? process.env.CONTACT_PHONE ?? "",
  email: process.env.CONTACT_EMAIL ?? "",
  website: process.env.CONTACT_WEBSITE ?? "",
  linkedin: process.env.CONTACT_LINKEDIN ?? "",
  instagram: process.env.CONTACT_INSTAGRAM ?? "",
  calendar: process.env.CONTACT_CALENDAR ?? "",
  address: process.env.CONTACT_ADDRESS ?? "",
};

export type Contact = typeof contact;
