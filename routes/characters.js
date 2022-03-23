const express = require("express");
const router = express.Router();
const {
  getCharacters,
  createCharacters,
  updateCharacters,deleteCharacter
} = require("../controllers/characters");

router.get("/", getCharacters);
router.post("/", createCharacters);
router.put("/:id", updateCharacters);
router.delete("/:id",deleteCharacter)

module.exports = router;
