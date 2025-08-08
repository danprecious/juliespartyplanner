// app/api/send-auth-link/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const receiverMail = "Juliepartyplannerandconsultllc@gmail.com";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "kdpcoder@gmail.com",
        pass: "zymtznvwrlyfvlgu", // Consider using an env variable
      },
    });

    const mailOptions = {
      from: email,
      to: receiverMail,
      subject: `New Client Message from ${email}`,
      text: `${message}`,
      html: `${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
