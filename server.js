const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/:pageName", (req, res) => {
  const pageName = req.params.pageName;
  const filePath = path.join(__dirname, `${pageName}.html`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(404).send("Page not found");
    } else {
      res.send(data);
    }
  });
});

app.post("/:pageName", (req, res) => {
  const pageName = req.params.pageName;
  const filePath = path.join(__dirname, `${pageName}.html`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(404).send("Page not found");
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
