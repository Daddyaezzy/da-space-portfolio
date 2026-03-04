import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Process Telegram bot settings
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        // Format the message
        const telegramMessage = `
🌟 <b>New Lead/Contact Form Submission!</b>
👤 <b>Name:</b> ${name}
✉️ <b>Email:</b> ${email}
📝 <b>Subject:</b> ${subject || "No Subject"}

💬 <b>Message:</b>
${message}
    `.trim();

        // Send to Telegram using Bot API
        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                    parse_mode: "HTML",
                }),
            }
        );

        if (!telegramResponse.ok) {
            const errorData = await telegramResponse.text();
            console.error("Telegram API Error:", errorData);
            throw new Error("Failed to send message to Telegram");
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Error in contact route:", error);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
