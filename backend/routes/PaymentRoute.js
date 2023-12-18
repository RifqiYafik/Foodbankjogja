import express from "express";
import midtransClient from "midtrans-client";
import { nanoid } from "nanoid";

const router = express.Router();

router.post("/process-transaction", (req, res) => {
  try {
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-um39vne8qcDvJw2yJsS0DGvR",
      clientKey: "SB-Mid-client-Auje5CNwO6-1gcFQ",
    });

    const parameter = {
      transaction_details: {
        order_id: `TRX-${nanoid(4)}-${nanoid(8)}`,
        gross_amount: req.body.amount,
      },
      customer_details: {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        phone: req.body.phoneNumber,
        address: req.body.address,
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      const dataPayment = {
        response: JSON.stringify(transaction),
      };
      const token = transaction.token;

      res.status(200).json({ message: "Berhasil", dataPayment, token: token });
    });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).json({ message: error.message });
    // res.status(500).json({ message: error.message });
  }
});

export default router;
