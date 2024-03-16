import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      firstName,
      lastName,
      emailAddress,
      residentialCountry,
      sanCard,
      yourInquiry,
    } = bodyJSON;

    // Configure nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "noreply@clarity-solutions.io", // Your Gmail email
        pass: "bb%&95y6r2%P3dT*fgt", // Your Gmail password or app password
      },
      tls: {
        rejectUnauthorized: false // This bypasses the certificate validation
      }
    });

    // Set up email data
    const mailOptions = {
      from: '"Clarity Solutions" <noreply@clarity-solutions.io>', // Sender address
      to: "info@clarity-solutions.io", // Change to your recipient's email
      subject: "Contact Form Submission",
      text: `Name: ${firstName} ${lastName}\nEmail: ${emailAddress}\nResidentialCountry: ${residentialCountry}\nSAN or Card Number: ${sanCard}\nYour Inquiry: ${yourInquiry}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
