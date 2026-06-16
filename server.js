const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// ✅ ROOT ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

// form submit
app.post("/submit", (req, res) => {
    try {
        const data = req.body;

        console.log("NEW SUBMISSION:");
        console.log(JSON.stringify(data, null, 2));

        res.json({ success: true, message: "Data saved!" });

    } catch (err) {
        console.error(err);
        res.status(500).send("Error");
    }
});

// test route
app.get("/data", (req, res) => {
    res.json({ status: "OK" });
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});