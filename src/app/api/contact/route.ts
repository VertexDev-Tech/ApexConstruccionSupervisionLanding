import { NextResponse } from "next/server";

interface ContactPayload {
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  empresa?: string;
  tipoProyecto: string;
  mensaje: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const nombre = (body.nombre || "").trim();
    const apellido = (body.apellido || "").trim();
    const email = (body.email || "").trim();
    const telefono = (body.telefono || "").trim();
    const empresa = (body.empresa || "").trim();
    const tipoProyecto = (body.tipoProyecto || "").trim();
    const mensaje = (body.mensaje || "").trim();

    if (!nombre || !apellido || !email || !tipoProyecto || !mensaje) {
      return NextResponse.json(
        {
          ok: false,
          error: "Por favor completa todos los campos obligatorios del formulario.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Por favor ingresa un correo electrónico válido.",
        },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.BREVO_TO_EMAIL || "contacto@apex.com.pe";
    const toName = process.env.BREVO_TO_NAME || "APEX Construcción y Supervisión";
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "contacto@apex.com.pe";
    const senderName =
      process.env.BREVO_SENDER_NAME || "Web APEX Construcción y Supervisión";

    const fullName = `${nombre} ${apellido}`.trim();
    const subject = `[Web APEX] Nueva solicitud: ${tipoProyecto} - ${fullName}`;

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(subject)}</title>
      </head>
      <body style="margin:0;padding:0;background-color:#F4F6F8;font-family:Arial,Helvetica,sans-serif;color:#474A51;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F6F8;padding:32px 16px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:8px;overflow:hidden;border:1px solid #E2E8F0;">
                <tr>
                  <td style="background-color:#0F375B;padding:24px 32px;border-bottom:4px solid #DB881E;">
                    <h1 style="margin:0;color:#FFFFFF;font-size:20px;letter-spacing:0.5px;">APEX — CONSTRUCCIÓN Y SUPERVISIÓN</h1>
                    <p style="margin:6px 0 0 0;color:#DB881E;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">
                      Nueva Solicitud de Proyecto / Contacto Web
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:28px 32px;">
                    <p style="margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#474A51;">
                      Se ha recibido una nueva consulta desde el formulario de contacto de <strong>www.apex.com.pe</strong>:
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
                      <tr>
                        <td style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;font-weight:bold;color:#0F375B;width:36%;">Cliente / Contacto</td>
                        <td style="padding:10px 12px;border:1px solid #E2E8F0;color:#000000;">${escapeHtml(fullName)}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;font-weight:bold;color:#0F375B;">Correo Electrónico</td>
                        <td style="padding:10px 12px;border:1px solid #E2E8F0;color:#000000;">
                          <a href="mailto:${escapeHtml(email)}" style="color:#0F375B;text-decoration:underline;">${escapeHtml(email)}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;font-weight:bold;color:#0F375B;">Teléfono / Celular</td>
                        <td style="padding:10px 12px;border:1px solid #E2E8F0;color:#000000;">${escapeHtml(telefono || "No especificado")}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;font-weight:bold;color:#0F375B;">Empresa / Entidad</td>
                        <td style="padding:10px 12px;border:1px solid #E2E8F0;color:#000000;">${escapeHtml(empresa || "No especificada")}</td>
                      </tr>
                      <tr>
                        <td style="padding:10px 12px;background:#F8FAFC;border:1px solid #E2E8F0;font-weight:bold;color:#0F375B;">Especialidad / Servicio</td>
                        <td style="padding:10px 12px;border:1px solid #E2E8F0;color:#DB881E;font-weight:bold;">${escapeHtml(tipoProyecto)}</td>
                      </tr>
                    </table>

                    <div style="margin-top:22px;">
                      <p style="margin:0 0 8px 0;font-size:13px;font-weight:bold;color:#0F375B;text-transform:uppercase;">
                        Detalle del Requerimiento / Mensaje:
                      </p>
                      <div style="padding:16px;background-color:#F8FAFC;border-left:4px solid #DB881E;border-radius:4px;font-size:14px;line-height:1.6;color:#474A51;white-space:pre-wrap;">${escapeHtml(mensaje)}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#F8FAFC;padding:16px 32px;border-top:1px solid #E2E8F0;font-size:12px;color:#474A51;text-align:center;">
                    APEX Construcción y Supervisión · Jr. Los Constructores 123, Urb. El Ingeniero, Cajamarca, Perú · contacto@apex.com.pe
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const textContent = [
      "APEX - CONSTRUCCIÓN Y SUPERVISIÓN",
      "Nueva solicitud desde el formulario de contacto web",
      "--------------------------------------------------",
      `Nombre completo: ${fullName}`,
      `Correo: ${email}`,
      `Teléfono: ${telefono || "No especificado"}`,
      `Empresa / Entidad: ${empresa || "No especificada"}`,
      `Tipo de proyecto: ${tipoProyecto}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    // Si aún no se ha configurado BREVO_API_KEY en el entorno local/preview,
    // registramos el envío en servidor y respondemos de forma controlada para pruebas.
    if (!brevoApiKey) {
      console.warn(
        "[Brevo Contact API] BREVO_API_KEY no está configurada. Simulando envío hacia:",
        toEmail
      );
      return NextResponse.json({
        ok: true,
        simulated: true,
        recipient: toEmail,
        message:
          "Solicitud registrada correctamente. Configura la variable de entorno BREVO_API_KEY en Vercel para activar el despacho SMTP/API en vivo hacia contacto@apex.com.pe.",
      });
    }

    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: toEmail,
            name: toName,
          },
        ],
        replyTo: {
          email,
          name: fullName,
        },
        subject,
        htmlContent,
        textContent,
        tags: ["landing-contacto", "apex-web"],
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.text();
      console.error("[Brevo API Error]:", brevoResponse.status, errorData);
      return NextResponse.json(
        {
          ok: false,
          error:
            "No se pudo procesar el envío a través de Brevo. Verifica tu BREVO_API_KEY y remitente autorizado.",
        },
        { status: 502 }
      );
    }

    const result = await brevoResponse.json();

    return NextResponse.json({
      ok: true,
      simulated: false,
      recipient: toEmail,
      messageId: result.messageId,
      message:
        "¡Gracias por contactarnos! Tu requerimiento ha sido enviado a contacto@apex.com.pe y nuestro equipo técnico te responderá a la brevedad.",
    });
  } catch (error) {
    console.error("[Contact Endpoint Error]:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Ocurrió un error inesperado al procesar tu solicitud.",
      },
      { status: 500 }
    );
  }
}
