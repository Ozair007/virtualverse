import { Router } from "express";

const avatarRouter = Router();

avatarRouter.get("/avatars", (req, res) => {
    res.json({ message: "Avatars" });
});

export default avatarRouter;
