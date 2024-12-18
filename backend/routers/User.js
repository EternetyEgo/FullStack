const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../modules/User");
const Card = require("../modules/Card"); // Card modelini import qilish
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/token");
const bcrypt = require("bcrypt");

// get user
router.get("/me", auth, (req, res, next) => {
  const user = req.user;
  res.json({
    message: user,
  });
});

// all get users
router.get("/user-all", auth, async (req, res) => {
  let allData = await user.find();

  res.json({
    status: true,
    message: allData,
  });
});

// get user cards and reward stars for every 10 cards
router.get("/me/cards", auth, async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const userCards = await Card.find({ creator: user._id });

    if (userCards.length === 0) {
      return res.status(404).json({
        message: "No cards found for this user",
      });
    }

    // Har 10 ta kartaga yulduz qo'shish
    const starCount = Math.floor(userCards.length / 10); // 10 ta kartadan so'ng yulduzlar sonini hisoblash
    let stars = user.stars || 0; // Agar foydalanuvchida yulduzlar bo'lsa, ulardan foydalanamiz

    // Har 10 kartada bir yulduz qo'shish
    stars += starCount;

    // Yulduzlarni foydalanuvchi profiliga qo'shish
    user.stars = stars;
    await user.save();

    res.json({
      message: "User's cards",
      cards: userCards,
      stars: stars, // Yulduzlar sonini qaytarish
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});

// register user
router.post("/register", async (req, res) => {
  const { name, username, email, tel, place, skills, password } = req.body;
  const user = await User.findOne({ username: username });

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  if (user) return res.status(400).json({ message: "Bunday foydalanuvchi mavjud" });

  const newUser = new User({
    name,
    username,
    email,
    tel,
    place,
    skills,
    password: passwordHash,
    stars: 0, // Yangi foydalanuvchiga 0 yulduz qo'yish
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

// login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!password) return res.status(400).json({ message: "Ma'lumot to'liq emas" });

  const user = await User.findOne({ username: username });
  if (!user) return res.status(400).json({ message: "Username yoki parol xato" });

  const comparePass = await bcrypt.compare(password, user.password);
  if (!comparePass) return res.status(400).json({ message: "Parol yoki username xato" });

  const token = jwt.sign({ user: user._id }, config.get("tokenPrivateKey"));
  res.json({ message: "Token yaratildi", token });
});

// update user
router.post("/edit", auth, async (req, res) => {
  const { name, username, email, password } = req.body;
  const authUser = await User.findOne({ username: req.user.username });
  if (!authUser) return res.status(404).send("User not found");
  try {
    authUser.name = name;
    authUser.email = email;
    authUser.password = password;
    await authUser.save();
    res.json({
      message: "User updated successfully",
      authUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserProfile = () => {
//   const [cards, setCards] = useState([]);
//   const [stars, setStars] = useState(0);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       axios.get("/api/me/cards", {
//         headers: {
//           "Authorization": `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         setCards(response.data.cards);
//         setStars(response.data.stars);
//       })
//       .catch((error) => {
//         console.error("Error fetching user cards:", error);
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p><strong>Total Cards:</strong> {cards.length}</p>
//       <p><strong>Stars:</strong> {stars}</p>
//       <div>
//         <h3>Your Cards</h3>
//         <ul>
//           {cards.map(card => (
//             <li key={card._id}>{card.title}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Your Stars</h3>
//         <div>
//           {[...Array(stars)].map((_, index) => (
//             <span key={index} style={{ color: 'gold', fontSize: '20px' }}>★</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;
