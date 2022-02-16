const express = require("express");
const router = express.Router();

const ItemController = require("../controller/item.controller");


router.post("/", ItemController.caculateTotal);



module.exports = router;