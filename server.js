const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// store data (temporary)
let submissions = [];

// receive form data
app.post("/submit", (req, res) => {
    const data = req.body;

    console.log("New Data:", data);

    submissions.push(data);

    res.json({
        success: true,
        message: "Data saved successfully!"
    });
});

// view all data
app.get("https://profile-app-form-production.up.railway.app/data", (req, res) => {
    res.json(submissions);
});

// start server
app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});