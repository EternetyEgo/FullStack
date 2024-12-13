const mongoose = require("mongoose");
const express = require("express");
const auth = require("../middleware/token");
const router = express.Router();

// Izoh qo'shish (POST) - Foydalanuvchi yangi izoh qo'shish uchun
router.post("/add", auth, async (req, res) => {
  try {
    const { text, card_id } = req.body; // Izoh matni va karta ID-si
    const author = req.body.user._id; // Izohni yozgan foydalanuvchining ID-si

    // Agar matn yoki card_id bo'lmasa, xatolik qaytariladi
    if (!text || !card_id) {
      return res.status(400).json({ message: "Izoh yoki kartaning ID-si yo'q" });
    }

    // Yangi izoh yaratish
    const newComment = new Comment({
      text, // Izoh matni
      card_id, // Karta ID
      author, // Foydalanuvchi ID-si
    });

    // Yangi izohni ma'lumotlar bazasiga saqlash
    await newComment.save();

    // Izoh muvaffaqiyatli qo'shildi degan javobni qaytarish
    res.status(201).json({
      message: "Izoh muvaffaqiyatli qo'shildi",
      comment: newComment,
    });
  } catch (err) {
    console.log(err); // Xatolikni konsolga yozish
    res.status(500).json({ message: "Ichki server xatosi" }); // Agar serverda xatolik bo'lsa
  }
});

// Izohni tahrirlash (POST) - Foydalanuvchi izohni tahrirlash uchun
router.post("/edit/:id", auth, async (req, res) => {
  try {
    const { text } = req.body; // Yangi izoh matni
    // Agar tahrirlanadigan matn bo'lmasa, xatolik qaytariladi
    if (!text) {
      return res.status(400).json({ message: "Tahrirlash uchun ma'lumot qo'shing" });
    }

    // ID orqali izohni topish
    const comment = await Comment.findById(req.params.id);

    // Agar izoh topilmasa, xatolik qaytariladi
    if (!comment) {
      return res.status(404).json({ message: "Izoh topilmadi" });
    }

    // Foydalanuvchi faqat o'z izohini tahrirlay olishiga ruxsat beriladi
    if (comment.author.toString() !== req.body.user._id.toString()) {
      return res.status(403).json({ message: "Siz bu izohni tahrirlay olmaysiz" });
    }

    // Izohni yangilash
    comment.text = text;

    // O'zgartirilgan izohni saqlash
    await comment.save();

    // Tahrirlangan izohni qaytarish
    res.status(200).json({
      message: "Izoh muvaffaqiyatli tahrirlandi",
      comment,
    });
  } catch (err) {
    console.log(err); // Xatolikni konsolga yozish
    res.status(500).json({ message: "Serverda xatolik" }); // Agar serverda xatolik bo'lsa
  }
});

// Izohni o'chirish (DELETE) - Foydalanuvchi izohni o'chirishi mumkin
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    // Izohni ID orqali topish
    const comment = await Comment.findById(req.params.id);

    // Agar izoh topilmasa, xatolik qaytariladi
    if (!comment) {
      return res.status(404).json({ message: "Izoh topilmadi" });
    }

    // Foydalanuvchi faqat o'z izohini o'chirishi mumkin
    if (comment.author.toString() !== req.body.user._id.toString()) {
      return res.status(403).json({ message: "Siz bu izohni o'chira olmaysiz" });
    }

    // Izohni o'chirish
    await comment.remove();

    // O'chirilgan izohni qaytarish
    res.status(200).json({
      message: "Izoh muvaffaqiyatli o'chirildi",
    });
  } catch (err) {
    console.log(err); // Xatolikni konsolga yozish
    res.status(500).json({ message: "Serverda xatolik" }); // Agar serverda xatolik bo'lsa
  }
});

module.exports = router;
