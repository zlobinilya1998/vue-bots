const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const Sneaker = require("../models/Sneaker");

router.get("/", async (req, res) => {
  let sneakers = await Sneaker.find();
  res.send(sneakers);
});



module.exports = router;
