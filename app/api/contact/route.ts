import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validación básica en el servidor
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "El nombre debe tener entre 2 y 100 caracteres" },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      )
    }

    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { error: "El mensaje debe tener entre 10 y 1000 caracteres" },
        { status: 400 }
      )
    }

    // Obtener la URL del webhook desde las variables de entorno
    const webhookUrl = process.env.WEBHOOK_URL

    if (!webhookUrl) {
      console.error("WEBHOOK_URL no está configurada en las variables de entorno")
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      )
    }

    // Enviar datos al webhook en el formato que n8n espera
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: {
          name,
          email,
          message,
        },
        timestamp: new Date().toISOString(),
        source: "portfolio-contact-form",
      }),
    })

    if (!webhookResponse.ok) {
      throw new Error(`Webhook responded with status: ${webhookResponse.status}`)
    }

    return NextResponse.json(
      { message: "Mensaje enviado correctamente" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Error al procesar el formulario" },
      { status: 500 }
    )
  }
}

