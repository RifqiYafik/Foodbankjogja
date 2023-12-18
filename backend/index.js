import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PaymentRoute from "./routes/PaymentRoute.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(UserRoute);
app.use("/backend/payment", PaymentRoute);

const PORT = 2023;
app.get("/", (req, res) => {
  res.send(`Server berjalan di port ${PORT}`);
});
app.listen(PORT, () => console.log("Server up and running on port 5000"));
// app.listen(PORT, () => console.log("Server up and running on port 5000"));
