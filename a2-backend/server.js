require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const leadsRoute = require("./routes/leads");

const app = express();
connectDB();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.use("/api/leads", leadsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
