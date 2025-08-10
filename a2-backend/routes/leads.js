const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, institution, requirements } = req.body;
    if (!name || !email || !phone || !institution) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const lead = new Lead({ name, email, phone, institution, requirements });
    await lead.save();
    res.status(201).json({ message: "Lead created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
