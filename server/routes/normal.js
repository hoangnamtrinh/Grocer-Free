const express = require("express")
const router = express.Router()
const { getName } = require('../controllers/normal')

router.route('/').get(getName)

module.exports = router