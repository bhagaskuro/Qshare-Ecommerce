const router = require("express").Router();
const orderRoute = require("./orderRoute");
const userRoute = require("./userRoute");
const { authentication } = require("../middleware/auth");

//modular router
router.use("/users", userRoute);
router.use("/orders", authentication, orderRoute);

module.exports = router;
