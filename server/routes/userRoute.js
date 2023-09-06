const controllers = require("../controllers");
const router = require("express").Router();

//User Routes
router.post("/register", controllers.register);
router.post("/login", controllers.login);

module.exports = router;
