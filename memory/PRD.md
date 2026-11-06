# ZeniTeco — PRD

## Problem statement (original)
"crea una pagina para una empresa que se llama zeniteco creale un logo todo contenido realista. la empresa se dedica a 1) Servicios de administración de inmuebles 2) Servicios de instalación y mantenimiento de áreas verdes 3) Servicios combinados de apoyo en instalaciones"

## User choices
- Estilo visual: combinación de elegante/moderno + natural/ecológico + cálido/cercano
- Formulario de contacto: skipped → default (guardar mensajes en base de datos, sin email)
- Secciones: varias navegables (Inicio, Servicios, Nosotros, Proceso, Testimonios, Contacto)

## Architecture
- Frontend: React (CRA + craco), Tailwind, shadcn/ui, framer-motion (revelados cinéticos + scroll reveals), lenis (smooth scroll)
- Backend: FastAPI, endpoints `/api/` y `/api/contact` (POST/GET)
- DB: MongoDB via MONGO_URL / DB_NAME, colección `contact_messages`
- Logo: SVG propio ("Z" con hoja) en `src/components/ZenLogo.jsx` + `public/favicon.svg`

## User personas
- Presidenta de consejo de conjunto residencial (busca administración confiable y transparente)
- Gerente de operaciones de edificio corporativo (quiere un solo proveedor integral)
- Propietaria que vive fuera del país (necesita reportes claros)

## Implemented (2026-11-06)
- Landing completa en español: Hero cinético con parallax, marquee editorial, bento grid de 3 servicios, Nosotros con stats, Proceso (4 pasos), Testimonios (3), Contacto con formulario funcional, Footer
- Logo original ZeniTeco (SVG "Z" + hoja) usado en header, hero animado y favicon
- Paleta dark botánica (#08140D, #12261A, #D8F33C) + Playfair Display/Manrope + grano sutil
- Formulario de contacto guarda mensajes en MongoDB (validado con curl y screenshot)
- Responsive verificado a 1366/768/375px, menú móvil funcional
- data-testid en todos los elementos interactivos

## Backlog / next
- P0: —
- P1: Envío real de email al recibir contacto (Resend gestionado); sección FAQ; galería de proyectos/propiedades administradas
- P2: Blog de consejos de administración y jardinería; panel admin para ver mensajes; SEO avanzado (sitemap, JSON-LD); botón de WhatsApp
- Spark: mapa con ubicación de la oficina; animación de conteo en stats; modo de video hero
