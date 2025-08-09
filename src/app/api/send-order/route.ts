import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, cartItems } = await req.json();

    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !cartItems ||
      cartItems.length === 0
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const receiverMail = "Juliepartyplannerandconsultllc@gmail.com";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "kdpcoder@gmail.com",
        pass: "zymtznvwrlyfvlgu", // move to env in production
      },
    });

    const cartHtml = cartItems
      .map(
        (item: any) =>
          `<li>${item.title} (x${item.quantity}) - $${
            item.price * item.quantity
          }</li>`
      )
      .join("");

    const html = `
      <div>
        <h2>New Snack Order</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <h3>Items Ordered:</h3>
        <ul>${cartHtml}</ul>
      </div>
    `;

    await transporter.sendMail({
      from: email,
      to: receiverMail,
      subject: `New Snack Order from ${name}`,
      html,
    });

    return NextResponse.json({ message: "Order email sent successfully" });
  } catch (error) {
    console.error("Error sending order:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
