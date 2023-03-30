const router = require("express").Router();
const { authUser, getAllUsers} = require("../controller/controller");


//router.post("/", registerUser);
router.post("/", authUser);
router.get("/user/getAll", getAllUsers);

module.exports = router;    