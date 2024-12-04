const express = require("express");
const router = express.Router();
const { Card } = require("../modules/Card");

router.post("/create", async (req, res) => {
  let { img, name, desc, creator } = req.body;

  const validData = await Card.findOne({
    img,
    name,
    desc,
    creator,
  });
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

  const data = await Card({
    img,
    name,
    desc,
    creator,
  });

  await data.save();
  res.json({
    status: true,
    message: "Ma'lumot qo'shildi",
  });
});

router.get("/all", async (req, res) => {
  const allData = await Card.find();
  res.json({
    status: true,
    message: allData,
  });
});

router.get("/:id", async (req, res) => {
  const allData = await Card.findById(req.params.id);
  res.json({
    status: true,
    message: allData,
  });
});

module.exports = router;
