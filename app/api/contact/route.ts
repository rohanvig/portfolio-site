import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Resend API key is not configured on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const recipient = process.env.CONTACT_EMAIL_TO || "rohanvig777@gmail.com";

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipient,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Message from Portfolio</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #4f46e5;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #4b5563; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 30px; font-size: 11px; color: #9ca3af; text-align: center; border-t: 1px solid #f3f4f6; padding-top: 10px;">
            Sent from portfolio contact form.
          </div>
        </div>
      `,
    });

    // Check if resend returned an error
    if (data.error) {
      return Response.json(
        { error: data.error.message || "Failed to send email via Resend." },
        { status: 400 }
      );
    }

    return Response.json({ success: true, data });
  } catch (error: any) {
    return Response.json(
      { error: error.message || "Failed to send message." },
      { status: 500 }
    );
  }
}
