"use strict";
const express = require("express");
const router = express.Router();
const Card = require("../modules/Card");
const auth = require("../middleware/token");


// create card 
router.post("/create", auth, async (req, res) => {
  let { img, name, desc, category, creator } = req.body;

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
    category: category,
    creator: creator,
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
  const allData = await Card.find();
  res.json({
    status: true,
    message: allData,
  });
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

module.exports = router;
