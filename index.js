import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

//Send message to the Client
const sendMessage = async () => {
  const message = await client.messages.create({
    body: "Hello this is a test message by Twilio for Shivam",
    from: "+19032012124",
    to: process.env.TWILIO_PHONE_NUMBER,
    //for media
    mediaUrl:
      "https://unsplash.com/photos/white-sports-car-parked-on-a-golden-surface-6R8L09tbjOo",
  });

  console.log(message);
};

//Send Phone call to the client
const makeCall = async () => {
  const call = await client.calls.create({
    // url: "https://drive.google.com/file/d/1pMmNxRhugi_DUB4vD0AZEZUPEQtcjuGr/view?usp=sharing",
    // method: "get",

    //By using twiml
    twiml: `
        <Response>
            <Play>https://drive.google.com/file/d/1pMmNxRhugi_DUB4vD0AZEZUPEQtcjuGr/view?usp=sharing</Play>
        </Response>
        `,

    //By using Text to speach
    twiml: `
        <Response>
            <Say voice="man">Hi! This is Shivam Swaroop speaking...</Say>
        </Response>
        `,

    from: "+19032012124",
    to: process.env.TWILIO_PHONE_NUMBER,
  });

  console.log(call);
};

// sendMessage();
makeCall();
