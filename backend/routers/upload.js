const express = require("express");
const router = express.Router();
const multer = require("multer");
const { Upload } = require("../modules/upload");
const path = require("path");
const auth = require("../middleware/token");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: Storage }).single("file");

router.post("/upload", auth, async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.log("File saqlanmadi");
      return res.status(500).json({ message: "Fayl yuklashda xatolik" });
    }

    try {
      const im = new Upload({
        file: req.file.filename, // Fayl nomini to'g'ri oling
        contentType: req.file.mimetype, // Faylning real turini oling
      });

      const savedFile = await im.save();
      res.json({
        message: "Fayl muvaffaqiyatli yuklandi",
        data: savedFile.file,
      });
    } catch (error) {
      res.status(500).json({
        message: "Fayl saqlanmadi",
      });
    }
  });
});

module.exports = router;
