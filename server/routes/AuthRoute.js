import express from "express";
import { loginUser, registerUser } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/test", async (req, res) => {
  res.send(req + "Test Auth Route");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
