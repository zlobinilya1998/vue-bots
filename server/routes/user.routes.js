const { Router } = require("express");
const router = Router();
const User = require("../models/User");

router.post("/delete", async (req, res) => {
  const { login } = req.user;
  try {
    await User.deleteOne({ login });
    return res.send("Пользователь успешно удален");
  } catch (e) {
    console.log(e);
  }
});

router.put("/email", async (req, res) => {
  let { email } = req.body;
  let { login } = req.user;
  try {
    let user = await User.findOne({ login });
    if (!user) return res.send("No user");
    user.email = email;
    await user.save();
    res.send(user._doc);
  } catch (e) {
    console.log(e);
  }
});
router.put("/phone", async (req, res) => {
  let { phone } = req.body;
  let { login } = req.user;
  try {
    let user = await User.findOne({ login });
    if (!user) return res.send("No user");
    user.phone = phone;
    await user.save();
    res.send(user._doc);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
