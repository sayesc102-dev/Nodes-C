const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// =========================
// Static Files
// =========================

app.use(express.static(path.join(__dirname, "public")));

// =========================
// JSON
// =========================

app.use(express.json());

// =========================
// Main Page
// =========================

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// =========================
// API
// =========================

app.get("/api/status", (req, res) => {
    res.json({
        online: true,
        name: "Nodes C",
        currency: "Nodes C"
    });
});

// =========================
// 404
// =========================

app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "public", "404.html")
    );
});

// =========================
// Start Server
// =========================

app.listen(PORT, () => {
    console.log("=================================");
    console.log("       Nodes C Website");
    console.log("=================================");
    console.log(`Website running on port ${PORT}`);
});


