const express = require('express');
const router = express.Router();
const getBreweriesHandler = require('../handler/getBreweriesHandler');

router.get('/', getBreweriesHandler);
router.get('/:id', getBreweriesHandler);

module.exports = router;