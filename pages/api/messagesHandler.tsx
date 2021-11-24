import client from "../../lib/sanityClient"

export default async function handler(req, res) {
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
              }).then((res) => {
            console.log(`Message was created, document ID is ${res._id}`);
          });
        res
          .status(200)
          .json({ msg: `Message was created, document ID is ${res._id}` });
          } catch (err) {
            console.error(err);
            res.status(500).json({ msg: "Error, check console" });
          }

          break;
}
}