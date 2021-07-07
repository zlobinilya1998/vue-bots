const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();

const port = 3000 || env.process.port;

app.use(cors());
app.use(express.json());

app.use("/api/login", require("./routes/login.routes"));
app.use("/api/register", require("./routes/register.routes"));
app.use("/api/sneakers", require("./routes/sneakers.routes"));

app.get("/", (req, res) => {
  res.send("Hello from App");
});

start = async () => {
  try {
    const DB = await mongoose.connect(
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
