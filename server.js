import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello world, let's host this!" });
});

app.get("/test", (req, res) => {
  res.json({ message: "It's working 🤗" });
});

app.listen(process.env.PORT || PORT, () => console.log(`Listening on ${PORT}`));
