import express from "express";
import { login, logout, signup, refreshToken, getProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// verificare dacă rutele /signup, /login și /logout 
// sunt definite corect și răspund la cereri GET, 
// afișând un mesaj simplu pentru confirmare.
// router.get("/signup", (req, res) => {
//     res.send("Sign up route called");
// });
// router.get("/login", (req, res) => {
//     res.send("login route called");
// });
// router.get("/logout", (req, res) => {
//     res.send("logout route called");
// });

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);

export default router;
