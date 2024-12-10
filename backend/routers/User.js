const express = require("express");
const router = express.Router();
const User = require("../modules/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/token");
  

// add user 
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

// login page 
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const auth = await User.findOne({ username: req.body.username });
  if (!auth) return res.status(404).send("User not found");
  const token = jwt.sign({ user: auth._id }, config.get("tokenPrivateKey"), { expiresIn: '1h' });
  res.json({ message: "Token yaratildi", token });
});

// update 

router.post("/edit", auth, async (req, res) => {
  const { name, username, email, password } = req.body;
  const auth = await User.findOne({ username: req.user.username });
  if (!auth) return res.status(404).send("User not found");
  try {
    auth.name = name
    auth.email = email
    auth.password = password
    await auth.save()
    // const token = jwt.sign({ user: updatedUser._id }, config.get("tokenPrivateKey"), { expiresIn: '1h' });
    res.json({
      message: "User updated successfully",
      auth
    })
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});



module.exports = router;
