# Tarjeta Digital JaaDs Global

Tarjeta de visita digital premium creada con Next.js, TypeScript, Tailwind CSS y App Router.

## Desarrollo

```bash
npm install
npm run dev
```

La aplicación se abre en `http://localhost:3000`.

## Build

```bash
npm run build
```

## Variables de entorno

Copia `.env.example` a `.env.local` en local y configura estos valores también en Vercel:

```bash
CONTACT_PHONE=
CONTACT_WHATSAPP=
CONTACT_EMAIL=
CONTACT_WEBSITE=
CONTACT_LINKEDIN=
CONTACT_INSTAGRAM=
CONTACT_CALENDAR=
CONTACT_ADDRESS=
```

Los datos de contacto se sirven mediante rutas internas para que no queden escritos en el HTML inicial de la tarjeta.
