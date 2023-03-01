const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = require("node:path");

const app = express();
app.set("easy-app-root-path", __dirname);

app.use(cors()); // ignore

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
