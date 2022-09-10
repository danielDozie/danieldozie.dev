import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
const { google } = require('googleapis');

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
    api: {
        bodyParser: false,
    },
}

async function readBody(readable: NextApiRequest) {
    const chunks = []
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }
    return Buffer.concat(chunks).toString('utf8')
}

//configure google oauth2 client
const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_CLIENT_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_CLIENT_REFRESH_TOKEN });

//api handler
const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const secret = process.env.NEXT_PUBLIC_WEBHOOK_SECRET;
    const signature = req.headers[SIGNATURE_HEADER_NAME]
    const body = await readBody(req)
    
    const isValid = isValidSignature(body, signature as string, secret)

    if (!isValid) {
        res.status(401).json({ msg: 'Invalid signature' })
        return
    }
    //generate access token from oauth2 client
    const accessToken = await oAuth2Client.getAccessToken()
    
    try {
        switch (req.method) {
            case 'POST':
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        type: 'OAuth2',
                        user: process.env.NEXT_PUBLIC_EMAIL,
                        clientId: process.env.GOOGLE_CLIENT_ID,
                        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                        refreshToken: process.env.GOOGLE_CLIENT_REFRESH_TOKEN,
                        accessToken: accessToken
                    },
                })

                const mailOptions = {
                    from: `"Daniel Dozie 👻" <${process.env.NEXT_PUBLIC_EMAIL}>`,
                    to: `${process.env.NEXT_PUBLIC_EMAIL}`, 
                    subject: "New Message Notification ✔",
                    text: "Hello Dozie. Guy, you get new message for your portfolio backend. Check am quick... make you for respond.",
                    html: `<div style=""><p><b>Hello Dozie.</b> <br/>Guy, you get new message for your portfolio backend. Check am quick... make you for respond.<br/> <div style="background:none; color:green; font-weight:semi-bold; font-size:12px; text-decoration: none;"><a style="color:green; font-weight:bold; font-size:12px; text-decoration: none;" href='https://badtfolio.sanity.studio/desk/messages'>Go to dashboard</a></div> <br/><br /> Ciao!</p></div>`
                };
                
                await transporter.sendMail(mailOptions);
                
                res.status(200).json({
                    msg: 'Notification sent',
                    response: `${res.statusCode}`
                });
                break;

            default:
                res.status(405).json({ msg: 'Method not allowed' })
                break;
        }
    } catch {
        res.status(500).json({ msg: 'Error sending email' })
    }
}

export default handler;