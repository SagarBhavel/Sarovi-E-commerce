const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app", "views"));

app.use(express.static(path.join(__dirname, "public")));
//ateched css with srver
app.get("/css/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "views", "css", "style.css"));
});
// adding path for img folder
app.use("/img", express.static(path.join(__dirname, "app", "views", "img")));
// adding path for videos addd in imdex file
app.use(
  "/videos",
  express.static(path.join(__dirname, "app", "views", "videos"))
);
// index filde target
app.get("/", (req, res) => {
  res.render("index");
});

//   

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
