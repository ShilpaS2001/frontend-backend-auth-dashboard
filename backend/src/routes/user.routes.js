const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const User = require("../models/User");

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
});

module.exports = router;
