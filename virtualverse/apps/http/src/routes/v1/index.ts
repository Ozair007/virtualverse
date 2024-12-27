import { Router } from "express";
import avatarRouter from "./avatar";
import elementRouter from "./element";
import adminRouter from "./admin";
import userRouter from "./user";
import spaceRouter from "./space";

const router = Router();

router.post("/signup", (req, res) => {
    res.json({ message: "Signup" });
});

router.post("/signin", (req, res) => {
    res.json({ message: "Signin" });
});

export default router;
router.use("/avatars", avatarRouter);
router.use("/elements", elementRouter);
router.use("/users", userRouter);
router.use("/admin", adminRouter);
router.use("/space", spaceRouter);
