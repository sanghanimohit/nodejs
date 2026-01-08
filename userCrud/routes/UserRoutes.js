const express = require("express")

const{getuser,adduser, putuser} = require("../Controller/userController");

const router = express.Router();

router.get("/getuser", getuser);
router.post("/addusre", adduser);
router.put("/putuser/:id",putuser);
router.patch("/patchuser/:id",patchuser);
router.delete("/deleteuser/:id",deleteuser);

module.exports = router;