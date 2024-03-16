import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const requestBody = await request.text();
    const bodyJSON = JSON.parse(requestBody);
    const {
      yourName,
      contactPhoneNumber,
      emailAddress,
      birthDate,
      yourCountry,
      yourCity,
      yourState,
      zipCode,
      addressLine1,
      addressLine2,
      countryOfBankAccount,
      monthlyPaymentVolume,
      idType,
      anticipatedPaymentCountries,
      additionalComments,
      idNumber
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
      subject: "Business Form Submission",
      text: `Name: ${yourName}\nEmail: ${emailAddress}\nContact Phone Number: ${contactPhoneNumber}\nDate of Birth: ${birthDate}\nCountry: ${yourCountry}\nCity: ${yourCity}\nState/Province: ${yourState}\nZip Code: ${zipCode}\nAddress Line 1: ${addressLine1}\nAddress Line 2: ${addressLine2}\nCountry of Bank Account: ${countryOfBankAccount}\nMonthly Payment Volume: ${monthlyPaymentVolume}\nID Type: ${idType}\nID Number: ${idNumber}\nAnticipated Payment Countries: ${anticipatedPaymentCountries}\nAdditional Comments: ${additionalComments}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
