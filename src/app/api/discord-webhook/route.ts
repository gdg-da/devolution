import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

        if (!webhookUrl) {
            return res.status(500).json({ error: "Webhook URL not configured" });
        }

        const payload = {
            content: `New Submission:\n${JSON.stringify(req.body, null, 2)}`,
        };

        const discordResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (discordResponse.ok) {
            return res.status(200).json({ message: "Webhook sent successfully" });
        } else {
            return res.status(500).json({ error: "Failed to send webhook" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}