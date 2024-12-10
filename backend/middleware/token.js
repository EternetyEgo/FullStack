const jwt = require("jsonwebtoken");
const User = require("../modules/User");
const config = require("config");

const auth = async function (req, res, next) {
  const token = req.header("token");
  if (!token) {
    return res.status(401).json({
      status: false,
      message: "token bolmaganligi sabab sorov toxtatildi",
    });
  }
  try {
    const decoded = jwt.verify(token, config.get("tokenPrivateKey"));
    const user = await User.findById(decoded.user);
    req.user = user;
    next();
  } catch (err) {
    req.user = null;
    next();
  }
};

module.exports = auth;
