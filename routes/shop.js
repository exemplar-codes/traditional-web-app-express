const express = require("express");

const router = express.Router();
const path = require("node:path");

const rootPath = require("../utils/path");

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from Express!</h1>");

  // Approach 1 - make the path from this current file.
  const shopHTMLFilePath = path.join(
    __dirname, //- /routes
    "..", //- /, at root
    "views", //- /views
    "shop.html"
  ); //- /views/shop.html

  // Approach 2. Go to root of the project, then build path
  // a setting is required for this, accessible via app, that is available in all routers too,
  // through req.app or res.app
  const shopHTMLFilePath2 = path.join(
    req.app.get("easy-app-root-path"),
    "views",
    "shop.html"
  );

  // Convenience 1, use UNIX delimiters and split the path, after root is established
  const shopHTMLFilePath3_1 = path.join(
    __dirname, //- /routes
    "..",
    ..."views/shop.html".split("/")
  );
  const shopHTMLFilePath3_2 = path.join(
    req.app.get("easy-app-root-path"),
    ..."views/shop.html".split("/")
  );
  const shopHTMLFilePath3_3 = path.join(
    rootPath,
    ..."views/shop.html".split("/")
  );

  res.sendFile(shopHTMLFilePath3_3);
});

module.exports = router;
