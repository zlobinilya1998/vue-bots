const { Router } = require("express");
const router = Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  let { login } = req.user;
  let orders = await Order.find({ user: login }).sort({date:-1});
  res.send(orders);
});

module.exports = router;
