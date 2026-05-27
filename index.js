require("dotenv").config({quiet: true});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
//test
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
console.log("Connected to MongoDB");
app.listen(3001, () => console.log("API running on port 3001"));
})
.catch((err) => {
console.error("Connection Error:", err);
process.exit(1);
});
app.get("/", async (req, res) => {
    res.status(200).send("Xin chào bạn");
});

// Start server
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on http://localhost:${process.env.PORT || 3001}`);
});
//test1