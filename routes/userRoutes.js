const express = require("express");
const router = express.Router();
const register = require("../controllers/user");
const request = require("../controllers/test")

router.post("/login", register.testFunction);
router.get("/",request.getRequest)


module.exports = router;