const express = require("express")

const{getUser,adduser, putuser,patchuser,deleteUser} = require("../Controller/userController");

const upload = require("../../Middleware/multer");

const router = express.Router();

router.get("/getuser", getUser);
router.post("/adduser",upload.single("profileImage"), adduser);
// router.post("/adduser", adduser);
router.put("/putuser/:id",putuser);
router.patch("/patchuser/:id",patchuser);
router.delete("/deleteuser/:id",deleteUser);

module.exports = router;