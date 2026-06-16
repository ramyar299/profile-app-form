const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

// health check (Railway uses this sometimes)
app.get("/", (req, res) => {
    res.status(200).send("Server is running 🚀");
});

// submit form
app.post("/submit", (req, res) => {
    try {
        const data = req.body;

        console.log("NEW SUBMISSION:");
        console.log(data); // cleaner than JSON.stringify

        return res.status(200).json({
            success: true,
            message: "Data received successfully"
        });

    } catch (error) {
        console.error("ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

// view data test route
app.get("/data", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "API is working"
    });
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});