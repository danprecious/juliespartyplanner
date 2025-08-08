// app/api/send-booking/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, guests, eventDate } = await req.json();

    if (!email || !message || !name || !eventDate) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const receiverMail = "Juliepartyplannerandconsultllc@gmail.com";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "kdpcoder@gmail.com",
        pass: "zymtznvwrlyfvlgu", // Consider moving this to environment variables
      },
    });

    const html = `
      <div>
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Guests:</strong> ${guests || "Not specified"}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    const mailOptions = {
      from: email,
      to: receiverMail,
      subject: `New Booking Request from ${name}`,
      text: message,
      html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending booking email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
