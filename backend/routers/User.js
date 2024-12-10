const express = require("express");
const router = express.Router();
const User = require("../modules/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/token");
const bcrypt = require("bcrypt");

// get user
router.get("/me", auth,(req, res, next) => {
  const user = req.user;
  res.json({
    message: user
  })
});

// add user
router.post("/register", async (req, res) => {
  const { name, username, email,tel, skills, password } = req.body;
  const user = await User.findOne({ username: username });

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  if (user) return res.status(400).json({ massage: "Bunday foydalanuvchi mavjud" });

  if (!password || !tel) return res.status(400).json({ massage: "Ma'lumot to'liq emas" });

  const newUser = new User({
    name,
    username,
    email,
    tel,
    skills,
    passwordHash,
  });

  newUser
    .save()
    .then((user) =>
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
  if (!password) return res.status(400).json({ massage: "Ma'lumot to'liq emas" });
  const user = await User.findOne({ username: username });
  if (!user) return res.status(400).json({ massage: "Username yoki parol xato" });
  const auth = await User.findOne({ username: req.body.username });
  if (!auth) return res.status(404).send("User not found");
  const token = jwt.sign({ user: auth._id }, config.get("tokenPrivateKey"), { expiresIn: "1h" });
  res.json({ message: "Token yaratildi", token });
});

// update

router.post("/edit", auth, async (req, res) => {
  const { name, username, email, password } = req.body;
  const auth = await User.findOne({ username: req.user.username });
  if (!auth) return res.status(404).send("User not found");
  try {
    auth.name = name;
    auth.email = email;
    auth.password = password;
    await auth.save();
    // const token = jwt.sign({ user: updatedUser._id }, config.get("tokenPrivateKey"), { expiresIn: '1h' });
    res.json({
      message: "User updated successfully",
      auth,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
