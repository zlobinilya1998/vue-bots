const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const Sneaker = require("../models/Sneaker");

router.get("/", async (req, res) => {
  let sneakers = await Sneaker.find();
  sneakers = sneakers.map((sneaker) => {
    return {
      ...sneaker._doc,
      img: `localhost:${process.env.PORT}/${sneaker.img}`,
    };
  });
  res.send(sneakers);
});

router.post("/like", async (req, res) => {
  let { id } = req.body;
  let { login } = req.user;
  try {
    let user = await User.findOne({ login });
    if (!user) return res.send("No user");
    let sneaker = await Sneaker.findOne({ _id: id });
    user.favorites.push(sneaker);
    await user.save();
    res.send("success");
  } catch (e) {
    res.send(`Error:${e}`);
  }
});

router.post("/unlike", async (req, res) => {
  let { id } = req.body;
  let { login } = req.user;
  try {
    let user = await User.findOne({ login });
    user.favorites.pull(id);
    await user.save();
    res.send("success");
  } catch (e) {
    res.send(`Error:${e}`);
  }
});

module.exports = router;
