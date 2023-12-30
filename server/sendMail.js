import { Router } from "express";
import nodemailer from 'nodemailer'

const router = new Router();

router.get('/', (req, res) => {
  res.send('its work');
})

router.post('/mail', async (req, res) => {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: 'khitko.yulia@gmail.com', // твоя пошта
      pass: 'ahtl arlw rglj bjkm', // твій ключ
    }
  })

  try {
    const info = await transporter.sendMail({
      from: email,
      to: 'khitko.1025@gmail.com', // теж 
      subject: 'Фідбек',
      text: 'Фідбек',
      html: `
            <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Feedback Britlex</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f4f4f4;
    }

    h1 {
      color: #3498db;
    }

    p {
      color: #333;
      font-size: 16px;
      margin-bottom: 10px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    strong {
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div>
    <h1>Student Feedback</h1>
    <p>Dear Britlex,</p>
    <p>You have received feedback from a student:</p>

    <ul>
      <li><strong>Student Email:</strong> ${email}</li>
    </ul>
  </div>
</body>

</html>

            ` 
    })
    return res.json({ result: info.messageId });
  } catch (error) {
    throw error;
  }

})

export default router;