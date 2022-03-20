const { Movies } = require('../models/index');

const getAll = async(req, res) => {
    const getUsers = await Movies.findAll({
        attributes: ['title']
    });

    res.status(200).json({
        success: true,
        message: 'Movies get Title',
        getUsers
    })
};

module.exports = {
    getAll
}