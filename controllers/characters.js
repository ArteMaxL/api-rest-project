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
module.exports = { getCharacters };
