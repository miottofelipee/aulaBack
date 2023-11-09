import express from "express";
import { config } from "dotenv";   

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

app listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});