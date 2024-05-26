import express from "express";
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello world, let's host this!");
});

app.listen(process.env.PORT || PORT, () => console.log(`Listening on ${PORT}`));
