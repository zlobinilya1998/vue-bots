const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  let { login, password, email } = req.body;
  let candidate = await User.findOne({ login });
  if (candidate) {
    return res.send({
      message: "Пользователь уже существует!",
      type: "danger",
    });
  }
  try {
    const hashPassword = bcrypt.hashSync(password, 6);
    let user = new User({ login, password: hashPassword, email });
    await user.save();
    const token = jwt.sign({ login }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send({
      message: "Пользователь успешно создан",
      type: "success",
      user: { ...user._doc,token },
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Что-то пошло не так!", type: "danger" });
  }
});

module.exports = router;
