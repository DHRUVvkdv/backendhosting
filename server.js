import express from "express";
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ message: "Hello world, let's host this!" });
});
app.get("/test", (req, res) => {
  res.json({ message: "It's working 🤗" });
});

app.listen(process.env.PORT || PORT, () => console.log(`Listening on ${PORT}`));
