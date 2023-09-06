const orders = require("../controllers/orderCon");
const router = require("express").Router();

//Order Routes

router.post("/", orders.createOrder);

module.exports = router;
