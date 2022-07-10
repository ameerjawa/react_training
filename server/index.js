// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// app.get("/users", (req, res) => {
//     res.json({ users: ["ameer", "hoho", "aaa"] });
// });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});