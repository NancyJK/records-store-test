import express from "express";
import {
  login,
  signup,
  logout,
  updateUser,
  getMe,
  protect,
} from "../controllers/usersController.js";

const router = express.Router();

router.route("/register").post(signup);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/update/:id").patch(updateUser);

router.use(protect); // here we can modify the request object

router.route("/me").get(getMe);

export default router;
