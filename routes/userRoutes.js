const express = require("express");
const multer = require("multer");
const router = express.Router();
const register = require("../controllers/user");

// Configure Multer storage
const storage = multer.diskStorage({
  destination:"./public/user", // Specify the upload directory
  filename:( req, file, func) => {
    func(null, file.originalname); // Use the original file name
  }
})

const upload = multer({ storage: storage }); 

router.post("/post", register.postFunction);
router.get("/get", register.getRequest);
router.put("/update", register.update);
router.delete("/delete/:id", register.deleteReq);

// Multer upload route
router.post("/upload", upload.single('userProfile'), register.upload); 
module.exports = router;
