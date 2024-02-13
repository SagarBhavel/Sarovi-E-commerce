const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app", "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/css/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "views", "css", "style.css"));
});

app.use("/img", express.static(path.join(__dirname, "app", "views", "img")));

app.use(
  "/videos",
  express.static(path.join(__dirname, "app", "views", "videos"))
);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
