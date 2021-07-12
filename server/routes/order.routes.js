const { Router } = require("express");
const router = Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  const initialValue = 0;
  const reducer = (acc, curValue) => acc + curValue.price;
  const { login } = req.user;
  const { items } = req.body;
  try {
    const order = new Order({
      date: new Date().toString(),
      price: items.reduce(reducer, initialValue),
      items,
      user: login
    });
    await order.save()
    res.send("Заказ успешно оформлен");
  } catch (e) {
    console.log(e)
    res.send('Что-то пошло не так');
  }
});

module.exports = router;
