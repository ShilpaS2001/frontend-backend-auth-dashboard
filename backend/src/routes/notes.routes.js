const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const Note = require("../models/Note");

router.post("/", auth, async (req, res) => {
  const note = await Note.create({ ...req.body, userId: req.userId });
  res.json(note);
});

router.get("/", auth, async (req, res) => {
  const notes = await Note.find({ userId: req.userId });
  res.json(notes);
});

router.delete("/:id", auth, async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
