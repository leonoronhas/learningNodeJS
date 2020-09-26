const express = require("express");
const path = require('path');
const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("In the admin router");
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post("/add-product", (req, res, next) => {
    console.log("In the admin router");
    res.redirect("/");
  });
module.exports = router;
