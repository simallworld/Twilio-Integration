import dotenv from "dotenv";
import twilio from "twilio";

twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendMessage = async () => {
  const message = await twilio.messages.create({
    body: "Hello this is a test message by Twilio for Shivam",
    from: "+19032012124",
    to: process.env.TWILIO_PHONE_NUMBER,
  });

  console.log(message);
};

sendMessage();
