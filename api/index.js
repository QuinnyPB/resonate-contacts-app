const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = 8000;
const frontend = process.env.FRONTEND_URL;

let data;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json("Could not fetch data from jsonplaceholder.typicode.com/users");
    res.json({ Error: "Could not get data from url!" });
  }
});

app.post("/data", async (req, res) => {
  try {
    res.send(data);
  } catch (error) {
    res.status(500).json({ Error: "Could not get data from url!" });
  }
});

app.listen(port, () => {
  console.log("Express running on port", port);
});
