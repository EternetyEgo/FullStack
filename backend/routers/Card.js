"use strict";
const express = require("express");
const router = express.Router();
const Card = require("../modules/Card");
const auth = require("../middleware/token");
const User = require("../modules/User");

// create card
router.post("/create", auth, async (req, res) => {
  let { img, name, desc, technologies, creator } = req.body;

  const validData = await Card.findOne({ name });

  if (validData)
    return res.json({
      status: false,
      message: "Bunday card oldin yaratilgan",
    });
  if (name.length == 0)
    return res.json({
      status: false,
      message: "Ma'lumot to'liq emas",
    });
  if (name.length < 3)
    return res.json({
      status: false,
      message: "Yozgan ma'lumotlaringiz juda qisqa",
    });

  const data = new Card({
    img: img,
    name: name,
    desc: desc,
    technologies: technologies,
    category: category,
    creator: req.user._id,
  });

  await data.save();

  res.json({
    status: true,
    message: "Chipta Saqlandi",
    data: data,
  });
});

// all get card
router.get("/all", auth, async (req, res) => {
  let allData = await Card.find();

  allData = allData.map((e) => {
    const dataJson = e.toJSON();

    const liked = dataJson.likes.some((like) => like.toString() == req.user._id.toString());
    console.log(dataJson.likes, req.user._id);

    dataJson.liked = liked;
    delete dataJson.likes;

    return dataJson;
  });

  res.json({
    status: true,
    message: allData,
  });
});

// like to card
router.post("/like", auth, async (req, res) => {
  try {
    const { ticketId } = req.body;

    const ticket = await Card.findOne({ _id: ticketId });

    if (!ticket) {
      return res.status(400).json({
        message: "Chipta topilmadi.",
      });
    }

    const user = req.user;
    if (!user || !user._id) {
      return res.status(401).json({
        message: "Foydalanuvchi autentifikatsiyadan o'tmagan.",
      });
    }

    const wasLiked = ticket.likes.some((like) => like.toString() === user._id.toString());

    if (wasLiked) {
      ticket.likes = ticket.likes.filter((like) => like.toString() !== user._id.toString());
      await ticket.save();
      return res.json({
        message: "Like bekor qilindi",
        liked: false,
      });
    } else {
      ticket.likes.push(user._id);
      await ticket.save();
      return res.json({
        message: "Like saqlandi",
        liked: true,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Server xatosi yuz berdi.",
    });
  }
});

// get by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);

    if (!card) {
      return res.status(404).json({
        status: false,
        message: "Card topilmadi",
      });
    }
    res.json({
      status: true,
      message: card,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Serverda xatolik yuz berdi",
    });
  }
});

// edit by card
router.post("/edit", auth, async (req, res) => {
  const { id, img, name, desc, category } = req.body;

  // Foydalanuvchi IDsi authentifikatsiyadan olingan
  const userId = req.user._id;

  try {
    // Kartani ID va creator bo'yicha topish
    const eCard = await Card.findOne({ _id: id, creator: userId });

    // Agar karta topilmasa
    if (!eCard) {
      return res.status(400).json({
        status: false,
        message: "Bu karta sizga tegishli emas yoki mavjud emas.",
      });
    }

    // Ma'lumotlarni yangilash
    eCard.img = img;
    eCard.name = name;
    eCard.desc = desc;
    eCard.category = category;

    await eCard.save();

    res.json({
      status: true,
      message: "Karta muvaffaqiyatli yangilandi.",
      data: eCard,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Serverda xatolik yuz berdi.",
    });
  }
});

// del by card
router.delete("/del", async (req, res) => {
  const { id } = req.body;

  // Karta mavjudligini tekshirish
  const card = await Card.findById(id);

  if (!card) {
    return res.status(400).json({
      message: "Chipta topilmadi.",
    });
  }

  // Kartani o'chirish
  await Card.deleteOne({ _id: id });

  res.json({
    message: "Chipta o'chirildi.",
  });
});

// for card filter
router.post("/search", async (req, res) => {
  try {
    const { technologies } = req.query;

    if (!technologies) {
      return res.status(400).json({ error: "Technologies parametri kerak!" });
    }

    const techArray = Array.isArray(technologies) ? technologies : technologies.split(",").map((tech) => tech.trim());

    const matchingCards = await Card.find({ technologies: { $in: techArray } });

    res.json({
      status: true,
      data: matchingCards,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ichki server xatosi" });
  }
});

module.exports = router;


