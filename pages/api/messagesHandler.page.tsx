import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import client from "../../lib/sanityClient"

const handler:NextApiHandler = async (req:NextApiRequest, res:NextApiResponse): Promise<void> => {
  switch (req.method ) {
      case 'POST':
          const newMessage = JSON.parse(req.body)
          try {
              await client.create({
                _type: "messages",
                fullname: newMessage.fullName,
                email: newMessage.email,
                subject: newMessage.subject,
                message: newMessage.message,
              }).then((res: { _id: string; }) => {
            console.log(`Message was created, document ID is ${res._id}`);
          });
        res.status(200).json({ msg: `Message was created, document ID is ${res}` });
          } catch (err) {
            console.error(err);
            res.status(500).json({ msg: "Error, check console" });
          }
        break;
}
}
export default handler;