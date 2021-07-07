const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs")

router.post("/", async (req, res) => {
  let { login, password, email } = req.body;
  try {
    let candidate = await User.findOne({ login });
    if (candidate) {
      return res.send({ message: "Пользователь уже существует!",type:'danger'});
    }
    const hashPassword = bcrypt.hashSync(password,6);
    let user = new User({ login, password:hashPassword, email });
    await user.save();
    res.send({message:'Пользователь успешно создан',type:'success',user});
  } catch (e) {
    console.log(e)
    res.send({message:'Что-то пошло не так!',type:'danger'})
  }
});

module.exports = router;
