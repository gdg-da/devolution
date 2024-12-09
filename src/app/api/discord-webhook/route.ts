import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 });
    }

    const payload = {
        content: `New Submission:\n${JSON.stringify(await req.json(), null, 2)}`,
    };

    try {
        const discordResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (discordResponse.ok) {
            return NextResponse.json({ message: "Webhook sent successfully" });
        } else {
            return NextResponse.json({ error: "Failed to send webhook" }, { status: 500 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Error while sending webhook" }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'GET method is not allowed on this route' }, { status: 405 });
}