const express = require("express");
const router = express.Router();
const User = require("../modules/User");
const jwt = require("jsonwebtoken");
const config = require("config");
  
router.post("/register", async (req, res) => {
  const { name, username, email, password } = req.body;

  const newUser = new User({
    name,
    username,
    email,
    password,
  });

  newUser.save().then((user) =>
      res.json({
        message: user,
      })
    )
    .catch((error) =>
      res.status(400).json({
        message: error,
      })
    );
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const auth = await User.findOne({ username: req.body.username });
  if (!auth) return res.status(404).send("User not found");

  console.log(config.get("tokenPrivateKey"));
  

  let token = jwt.sign({ user: auth._id }, config.get("tokenPrivateKey"));
  res.json({
    message: token,
  });
});

module.exports = router;
