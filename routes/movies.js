const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers/movies');

/* GET users listing. */
router.get('/', getAll);

module.exports = router;