const { Router } = require("express");
const router = Router();
const Order = require("../models/Order");

router.get("/", async (req, res) => {
  let { login } = req.user;
  try {
    let orders = await Order.find({ user: login }).populate('items').sort({ date: -1 });
    res.send(orders);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
