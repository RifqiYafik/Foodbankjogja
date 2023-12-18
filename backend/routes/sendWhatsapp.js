const express = require("express");
const router = express.Router();
const twilio = require("twilio");

router.post("/", async (req, res) => {
  const accountSid = "your_account_sid";
  const authToken = "your_auth_token";
  const client = twilio(accountSid, authToken);

  const message = `Pesan dari: ${req.body.firstName} ${req.body.lastName}, Email: ${req.body.email}, Nomor Telepon: ${req.body.phoneNumber}, Alamat: ${req.body.address}, Jenis Makanan: ${req.body.descriptionMakanan}, Jumlah Makanan: ${req.body.descriptionJumlah}, Deskripsi: ${req.body.description}`;

  try {
    const result = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: "whatsapp:+6282180706187", // Ganti dengan nomor WhatsApp bisnis Anda
      body: message,
    });
    console.log(result.sid);
    res.status(200).json({ success: true, message: "WhatsApp message sent!" });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
