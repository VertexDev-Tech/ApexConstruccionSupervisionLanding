# APEX — Construcción y Supervisión | Landing Page Corporativa

Landing page institucional desarrollada con **Next.js (App Router)**, **TypeScript** y **Tailwind CSS**, diseñada estrictamente bajo los lineamientos del **Manual de Marca de APEX Construcción y Supervisión** y tomando como referencia arquitectónica la estructura de secciones y navegación de `losandes.ing`.

---

## 1. Cumplimiento del Manual de Marca (Checklist Pág. 27)
- **Paleta Cromática Oficial (Pág. 15):**
  - **Azul APEX:** `#0F375B` (50% — estructura principal, titulares y fondos institucionales).
  - **Blanco:** `#FFFFFF` (25% — fondos limpios y contraste).
  - **Gris Técnico:** `#474A51` (15% — textos de cuerpo y soporte).
  - **Naranja APEX:** `#DB881E` (10% — exclusivo para acentos, llamados a la acción, etiquetas y datos clave).
- **Sistema Tipográfico (Pág. 17):**
  - **Primaria (`Montserrat` SemiBold, Bold, ExtraBold):** Titulares `H1`, `H2`, subtítulos, menú y datos clave.
  - **Secundaria (`Inter` Regular, Medium, Bold):** Cuerpo de texto, fichas técnicas y descripciones.
- **Uso Correcto del Logotipo (Págs. 8, 9, 10, 12 y 13):**
  - **Fondo claro (Header):** Logotipo Horizontal Full Color oficial (`/brand/logo-horizontal-color.png`) con ancho `>= 220px` y área de seguridad.
  - **Fondo oscuro (Footer y Ficha de Contacto):** Versión Blanca oficial (`/brand/logo-horizontal-white.png` y `/brand/isotipo-white.png`) generada a partir de los archivos maestros sin alterar proporciones.

---

## 2. Configuración de Brevo para el Formulario de Contacto (`contacto@apex.com.pe`)

El formulario de contacto envía las solicitudes al endpoint serverless [`src/app/api/contact/route.ts`](./src/app/api/contact/route.ts), el cual se integra con la **API v3 de Correos Transaccionales de Brevo (`https://api.brevo.com/v3/smtp/email`)**.

### Variables de Entorno Requeridas (Local `.env.local` y en Vercel)

```env
BREVO_API_KEY=xkeysib-tu_clave_api_v3_de_brevo
BREVO_TO_EMAIL=contacto@apex.com.pe
BREVO_TO_NAME="APEX Construcción y Supervisión"
BREVO_SENDER_EMAIL=contacto@apex.com.pe
BREVO_SENDER_NAME="Web APEX Construcción y Supervisión"
```

### Pasos en tu cuenta de Brevo:
1. Ingresa a [app.brevo.com](https://app.brevo.com/).
2. En **Senders, Domains & Dedicated IPs**, verifica el dominio `apex.com.pe` o el remitente `contacto@apex.com.pe`.
3. En **SMTP & API → API Keys**, genera una nueva API Key v3 (`xkeysib-...`) y colócala en `BREVO_API_KEY`.

---

## 3. Despliegue en Vercel

1. Sube este repositorio a **GitHub / GitLab / Bitbucket** o ejecuta `npx vercel` desde la terminal.
2. En el panel de **Vercel → Project Settings → Environment Variables**, añade las variables listadas arriba (`BREVO_API_KEY`, `BREVO_TO_EMAIL`, `BREVO_SENDER_EMAIL`).
3. Haz clic en **Deploy**.
