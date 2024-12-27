import { Router } from "express";

const elementRouter = Router();

elementRouter.get("/elements", (req, res) => {
    res.json({ message: "Elements" });
});

export default elementRouter;
