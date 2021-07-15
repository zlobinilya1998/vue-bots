const { Router } = require("express");
const router = Router();
const multer = require("multer");
const User = require("../models/User");

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/avatar");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storageConfig }).single("file");

router.post("/", upload, async (req, res) => {
  let { login } = req.user;
  try {
    let user = await User.findOne({ login });
    user.photo = `http://localhost:${process.env.PORT}/static/avatar/${req.file.originalname}`;
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
