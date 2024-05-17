const express = require("express");
const router = express.Router();
const register = require("../controllers/user");


router.post("/post", register.postFunction);
router.get("/get",register.getRequest)
router.put("/update",register.update)
router.delete("/delete/:id",register.deleteReq)

module.exports = router;