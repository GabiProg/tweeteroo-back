import { SignUp, PostTweets, GetUsernames, GetTweets } from "../controllers/tweetsControllers.js";
import { Router } from "express";

const router = Router();

router.post("/sign-up", SignUp);
router.post("/tweets", PostTweets);
router.get("/tweets/:username", GetUsernames);
router.get("/tweets", GetTweets);

export default router;
