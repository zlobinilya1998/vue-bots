require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const verify = require('./middlewares/jwt')

const app = express();
const router = express.Router();


const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/static',express.static('public'))

app.use("/api/login",require("./routes/login.routes"));
app.use("/api/register", require("./routes/register.routes"));
app.use("/api/sneakers",verify,require("./routes/sneakers.routes"));
app.use("/api/order",verify,require("./routes/order.routes"))
app.use("/api/purchases",verify,require("./routes/purchases.routes"))
app.use("/api/user",verify,require("./routes/user.routes"))
app.use("/api/upload",verify,require("./routes/upload.routes"))

app.get("/", (req, res) => {
  res.send("Hello from App");
});

start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://zlobinilya:zlobinilya1998@cluster0.qteqp.mongodb.net/vue-bots?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    app.listen(port, () => {
      console.log(`Server has been started on port:${port}`);
    });
  } catch (e) {
    console.log(`Error:${e}`);
  }
};

start();

module.exports = router;
