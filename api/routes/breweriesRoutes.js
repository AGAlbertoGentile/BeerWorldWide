const express = require('express');
const router = express.Router();
const getBreweriesHandler = require('../handler/getBreweriesHandler');

router.get('/:id', getBreweriesHandler);
router.get('/', getBreweriesHandler);

module.exports = router;