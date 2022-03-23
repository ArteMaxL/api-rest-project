const { Characters } = require("../models/index");

const getCharacters = async (req, res) => {
  try {
    const detailCharacters = await Characters.findAll({
      attributes: ["image", "name"],
    });
    res.status(200).json({
      detailCharacters,
    });
  } catch (error) {
    const response = {
      status: 500,
      msg: "internal server error",
    };
    res.status(500).json({ response });
  }
};

const createCharacters = async (req, res) => {
  try {
    const character = await Characters.create(req.body);
    res.status(201).json(character);
  } catch (error) {
    res.status(404).jon("The character could not be created");
  }
};

const updateCharacters = async (req, res) => {
  const character = await Characters.findByPk(req.params.id);
  if (!character) {
    res.status(404).json("The character does not exist");
  } else {
    await Characters.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(201).json({ msg: "Character updated" });
  }
};
const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    await Characters.destroy({ where: { id } });
    res.status(201).json("Character was deleted");
  } catch (error) {
    res.status(404).json("Character does not exist");
  }
};

module.exports = {
  getCharacters,
  createCharacters,
  updateCharacters,
  deleteCharacter,
};
