import type { Contact } from "@/config/contact";

export function onlyDigits(value: string) {
  return value.replace(/[^\d]/g, "");
}

export function whatsappUrl(contact: Contact) {
  return `https://wa.me/${onlyDigits(contact.whatsapp || contact.phone)}`;
}

export function telUrl(contact: Contact) {
  return `tel:${contact.phone.replace(/\s/g, "")}`;
}

export function mailUrl(contact: Contact) {
  return `mailto:${contact.email}`;
}

export function absoluteUrl(path: string, baseUrl: string) {
  return new URL(path, baseUrl).toString();
}
